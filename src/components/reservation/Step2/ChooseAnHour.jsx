import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'


const ChooseAnHour = () => {
    const [timee, setTimee] = useState('انتخاب سانس')
    const [game, setGame] = useState()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    useEffect(() => {
        console.log(state)
    }, [state])

    useEffect(() => {
        // Ordered PRICE SANS
        const idProduct = window.location.hash.split('/')[2]
        let simpleListPriceSans = {
            ...state.escapeRoomsReducer.filter((item) => {
                return item.id == idProduct
            })
        }[0]
        setGame(
            [simpleListPriceSans.priceSans1,
            simpleListPriceSans.priceSans2,
            simpleListPriceSans.priceSans3,
            simpleListPriceSans.priceSans4,
            simpleListPriceSans.priceSans5,
            simpleListPriceSans.priceSans6,
            simpleListPriceSans.priceSans7,
            ]
        )


    }, [state.escapeRoomsReducer])



    const clickSans = (price, item) => {
        console.log(price, item)

        dispatch({ type: 'setPrice', peyload: { price } })
        dispatch({ type: 'setTimee', peyload: { timee:item.time } })
        setTimee(item.time)
    }
    return (
        <>
            <p className="mt-4 text-light">انتخاب سانس</p>
            <div className="dropdown ">
                <a href="#" className="ChooseAnHour py-2 px-3 text-right btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {timee}
                </a>
                <div className="dropdown-menu w-100 text-right" ariaLabelledby="dropdownMenuButton">

                    {state.SansReducer === "DISABLE" ? 'غیر فعال' : state.SansReducer.map((item, index) => {
                        if (item.disable) {
                            return (
                                <div key={index} className="px-4 d-flex my-3">
                                    <span className="float-right">{item.time} </span>
                                    <span className="text-danger small mr-4">غیر فعال</span>
                                </div>
                            )
                        }
                        return (
                            <a key={index} type="button" aria-disabled={true} onClick={() => clickSans(`${game[index]} تومان`, item)} className=" py-2 px-3 text-right btn-block pointer" >
                                <span className="float-right">{item.time} </span>
                                <span className="mr-3 text-danger small">{game ? `${game[index]} تومان` : null}</span>
                            </a>
                        )
                    })}


                </div>
            </div>
        </>
    )

}

export default ChooseAnHour