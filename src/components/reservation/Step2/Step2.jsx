import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';

import { useSelector, useDispatch } from 'react-redux'






const Step2 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const [date, setDate] = useState(momentJalaali(moment().format("YYYY/M/D"), 'YYYY/M/D'))
    const [timee, setTimee] = useState('انتخاب سانس')
    const [numberOfPersons, setNumberOfPersons] = useState('انتخاب نفرات')
    const [disableDate, setDisableDate] = useState([{
        disabled: true,
        start: momentJalaali().add(-1000, 'days'),
        end: momentJalaali().add(-1, 'days')
    },])

    const state = useSelector((state) => state)
    const [ChoiceDay, setChoiceDay] = useState(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD')).replace('0:00:00', ''))
    const dispatch = useDispatch()
    useEffect(() => {
        const idProduct = window.location.hash.split('/')[2]
        // FETCH DISABLE DATE
        dispatch({ type: 'DISABLE_DATE_WATCH', peyload: { idProduct } })
        // FETCH DISABLE SANS
        dispatch({ type: 'GET_TICKETS_REDUCER_WATCH', peyload: { idProduct, date: moment(date).format('YYYY/M/D') } })
    }, [])

    useEffect(() => {
        let newList = []
        // CHECK DISABLE DATE
        if (state.disableDate.length > 0) {
            state.disableDate.map((i) => {
                let dateindexLast = parseInt(i.date.split('/')[2])
                let datePlus = dateindexLast += 1
                let newDate = i.date.split('/')[0] + '/' + i.date.split('/')[1] + '/' + datePlus
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
            })
        }
        setDisableDate([...disableDate, ...newList])
    }, [state])

    useEffect(() => {
        console.log(disableDate)
    }, [disableDate])

    // <><><><><><><><><><><>
    useEffect(() => {
        // CHECK DISABLE SANS
        if (state.getTicketsReducer.length >= 0) {
            state.getTicketsReducer.map((ticket) => {
                if (ticket.date === moment(date).format('YYYY/M/D')) {
                    dispatch({ type: 'DISABLE_SANS_WATCH', peyload: ticket.timee })
                }
            })
        }
    }, [state.getTicketsReducer])




    useEffect(() => {
        // ACTIVE BTN NEXT
        if (timee !== 'انتخاب سانس' && numberOfPersons !== 'انتخاب نفرات') {
            setStateBtn(false)
        }
    }, [numberOfPersons, timee])

    const next = () => {
        console.log(moment(date).format('YYYY/M/D'))
        dispatch({ type: 'setDate', peyload: { date: moment(date).format('YYYY/M/D'), numberOfPersons, timee } })
        dispatch({ type: 'step2' })
    }

    const clickSans = (item) => {
        const price = item.price
        dispatch({ type: 'setPrice', peyload: { price: price } })
        setTimee(item.time)
    }
    const changeDate = (value) => {
        setDate(value.format("YYYY/M/D"))
        const idProduct = window.location.hash.split('/')[2]
        const dateStr = new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(value).replace('0:00:00', '')
        setChoiceDay(dateStr)
        dispatch({ type: 'GET_TICKETS_REDUCER_WATCH', peyload: { idProduct, date: value.format("YYYY/M/D") } })
        dispatch({ type: 'ACTIVE_SANS_WATCH' })
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
                    <div style={{ position: 'absolute', width: '24px', height: '24px', background: 'red', borderRadius: '3px' }}></div>
                    <p className="d-inline-block mr-5">
                        تعداد سانس های خالی
                    </p>
                </div>
                <div className=" pr-4" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '24px', height: '24px', background: '#496E4C', borderRadius: '3px' }}></div>
                    <p className="d-inline-block mr-5">
                        قابل رزرو
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

                    {state.SansReducer.map((item, index) => {
                        if (item.disable) {
                            return (
                                <div className="text-danger px-4">غیر فعال</div>
                            )
                        }
                        return (
                            <a key={index} type="button" aria-disabled={true} onClick={() => clickSans(item)} className=" py-2 px-3 text-right btn-block" >
                                <span className="float-right">{item.time} </span>
                                <span className="mr-3 text-danger small">{item.price}</span>
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