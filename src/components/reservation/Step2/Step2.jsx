import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
import CalendarComponent from "./CalendarComponent";
import { useSelector, useDispatch } from 'react-redux'

const Step2 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const [timee, setTimee] = useState('انتخاب سانس')
    const [numberOfPersons, setNumberOfPersons] = useState('انتخاب نفرات')
    const [disableDate, setDisableDate] = useState([{
        disabled: true,
        start: momentJalaali().add(-1000, 'days'),
        end: momentJalaali().add(-1, 'days')
    }])

    const state = useSelector((state) => state)
    const [ChoiceDay, setChoiceDay] = useState(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD')).replace('0:00:00', ''))
    const [activeSans, setActiveSans] = useState([])
    const dispatch = useDispatch()
    const [game, setGame] = useState()
    useEffect(() => {
        const idProduct = window.location.hash.split('/')[2]
        // GET SANS
        dispatch({ type: 'GET_SANS_WATCH', peyload: { idProduct, date: moment().format('YYYY/M/D') } })
        dispatch({ type: "DISABLE_DATE_WATCH", peyload: { idProduct } })
    }, [])




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
    useEffect(() => {
        console.log(state)
    }, [state])


    useEffect(() => {
        // ACTIVE BTN NEXT
        if (timee !== 'انتخاب سانس' && numberOfPersons !== 'انتخاب نفرات') {
            setStateBtn(false)
        }
    }, [numberOfPersons, timee])



    const next = () => {

        dispatch({ type: 'setTimee', peyload: { timee } })
        dispatch({ type: 'setNumberOfPersons', peyload: { numberOfPersons } })
        dispatch({ type: 'step2' })
    }

    const clickSans = (price, item) => {
        console.log(price, item)

        dispatch({ type: 'setPrice', peyload: { price } })
        setTimee(item.time)
    }

    return (
        <div className="py-5 my-5">
            <CalendarComponent />
            {/*  */}
            {/* Choose an hour */}
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
            {/* number of people */}
            <p className="mt-4 text-light">تعداد افراد</p>
            <div className="dropdown ">
                <a href="#" className="ChooseAnHour py-2 px-3 text-right btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {numberOfPersons}
                </a>
                <div className="dropdown-menu w-100 text-right" ariaLabelledby="dropdownMenuButton">
                    {/*  */}
                    <a type="button" onClick={() => setNumberOfPersons('5 نفر ')} className=" py-2 px-3 text-right btn-block" >
                        5نفر
                    </a>
                    {/*  */}

                </div>
            </div>
            <div className="d-flex justify-content-between mt-5" >
                <button className="btn btn-gray" onClick={() => dispatch({ type: 'step0' })}>قبلی</button>
                <button className="btn btn-game-reservation" onClick={next} disabled={stateBtn}>بعدی</button>
            </div>
        </div>
    )
}

export default Step2