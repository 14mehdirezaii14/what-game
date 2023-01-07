import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';

import { useSelector, useDispatch } from 'react-redux'

const Step2 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const [date, setDate] = useState()
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
        dispatch({ type: 'GET_SANS_WATCH', peyload: { idProduct, date: moment(date).format('YYYY/M/D') } })
        dispatch({ type: "DISABLE_DATE_WATCH", peyload: { idProduct } })
    }, [])

    useEffect(() => {
        let newList = []
        // CHECK DISABLE DATE
        let stateDisableDate = state.disableDate

        console.log(stateDisableDate.length)
        if (stateDisableDate.length > 0) {
            stateDisableDate.map((i) => {
                let dateindexLast = parseInt(i.date.split('/')[2])
                let datePlus = dateindexLast += 1
                let newDate = i.date.split('/')[0] + '/' + i.date.split('/')[1] + '/' + datePlus
                if (i.date === moment(date).format('YYYY/M/D')) {
                    dispatch({ type: "ALL_DISABLE_SANS_" })
                }


                if (datePlus != 32) {
                    newList.push({
                        disabled: true,
                        start: newDate,
                        end: i.date,
                    })
                } else {
                    newList.push({
                        disabled: true,
                        start: i.date,
                        end: i.date,
                    })
                }
            }
            )
        }
        // let activeSans = []
        // if (state.SansReducer !== "DISABLE") {
        //     state.SansReducer.map((s) => {
        //         console.log(s)
        //         if (!s.disable) {
        //             activeSans.push({
        //                 color: "black",
        //                 start: moment(date).format('YYYY/M/D'),
        //                 end: moment(date).format('YYYY/M/D'),
        //             })
        //         }
        //     })
        //     console.log(activeSans)
        // }
        setDisableDate([{
            disabled: true,
            start: momentJalaali().add(-1000, 'days'),
            end: momentJalaali().add(-1, 'days')
        }
            , ...newList])
    }, [state.disableDate, state.SansReducer])



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
        dispatch({ type: 'setDate', peyload: { date: moment(date).format('YYYY/M/D'), numberOfPersons, timee } })
        dispatch({ type: 'step2' })
    }

    const clickSans = (item) => {
        const price = item.price
        dispatch({ type: 'setPrice', peyload: { price: price } })
        setTimee(item.time)
    }
    const changeDate = (value) => {
        const date = value.format("YYYY/M/D")
        const idProduct = window.location.hash.split('/')[2]
        const dateStr = new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(value).replace('0:00:00', '')
        setDate(date)
        setChoiceDay(dateStr)
        dispatch({ type: 'GET_SANS_WATCH', peyload: { idProduct, date: moment(date).format('YYYY/M/D') } })
    }
    return (
        <div className="py-5 my-5">
            <h3 className="my-5 py-5">
                تعیین زمان
            </h3>
            <p className="mt-5">
                دراین قسمت ابتدا تاریخ روزی که قصد دارید برای بازی مراجعه کنید را انتخاب کنید
                . سپس  ساعت مدنظرتان را از بخش پایین بخش تقویم تایید کنید.
            </p>
            <div className="CalendarParent">
                <Calendar
                    value={date}
                    ranges={disableDate}

                    inputFormat="YYYY/MM/DDD"
                    isGregorian={false}
                    // ref={datePickerRef}
                    onChange={value => {
                        changeDate(value)
                    }}
                    timePicker={false}
                    calendarStartDay={5}
                    locale="hu"
                />
                {/* Help calendar */}
                <div className="mt-5 pr-4" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '24px', height: '24px', background: '#BCBCBC', borderRadius: '3px' }}></div>
                    <p className="d-inline-block mr-5">
                        روز های غیر فعال
                    </p>
                </div>
                <div className=" pr-4" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '24px', height: '24px', background: '#496E4C', borderRadius: '3px' }}></div>
                    <p className="d-inline-block mr-5">
                        قابل رزرو
                    </p>
                </div>
                <div className=" pr-4" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '24px', height: '24px', background: '#3058C5', borderRadius: '3px' }}></div>
                    <p className="d-inline-block mr-5">
                        انتخاب شما
                    </p>
                </div>
            </div>
            {/*  */}

            <div>
                <p className="text-light my-4">روز انتخابی شما:  {ChoiceDay}</p>
            </div>
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
                            <a key={index} type="button" aria-disabled={true} onClick={() => clickSans(item)} className=" py-2 px-3 text-right btn-block pointer" >
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