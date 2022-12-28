import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';

import { useSelector, useDispatch } from 'react-redux'
import Axios from "../../../api/axios";


// const disableDate = [
//     {
//         disabled: true,
//         start: momentJalaali().add(-1000, 'days'),
//         end: momentJalaali().add(-1, 'days')
//     },
//     {
//         disabled: true,
//         start: '2022/12/25',
//         end: '2022/12/25'
//     },
// ]


// const listTime = [
//     {
//         time: 'ساعت 11',
//         price: '105,000 هزار تومان',
//         disable: true
//     },
//     {
//         time: 'ساعت 13',
//         price: '105,000 هزار تومان',
//         disable: false
//     },
//     {
//         time: 'ساعت 15',
//         price: '130,000 هزار تومان',
//         disable: false
//     },
//     {
//         time: 'ساعت 17',
//         price: '130,000 هزار تومان',
//         disable: false
//     },
//     {
//         time: 'ساعت 19',
//         price: '130,000 هزار تومان',
//         disable: false
//     },
//     {
//         time: 'ساعت 21',
//         price: '150,000 هزار تومان',
//         disable: false
//     },
//     {
//         time: 'ساعت 23',
//         price: '150,000 هزار تومان',
//         disable: false
//     },
// ]

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
    const [listTime, setListTime] = useState([
        {
            time: 'ساعت 11',
            price: '105,000 هزار تومان',
            disable: false
        },
        {
            time: 'ساعت 13',
            price: '105,000 هزار تومان',
            disable: false
        },
        {
            time: 'ساعت 15',
            price: '130,000 هزار تومان',
            disable: false
        },
        {
            time: 'ساعت 17',
            price: '130,000 هزار تومان',
            disable: false
        },
        {
            time: 'ساعت 19',
            price: '130,000 هزار تومان',
            disable: false
        },
        {
            time: 'ساعت 21',
            price: '150,000 هزار تومان',
            disable: false
        },
        {
            time: 'ساعت 23',
            price: '150,000 هزار تومان',
            disable: false
        },
    ])
    const state = useSelector((state) => state)
    const [ChoiceDay, setChoiceDay] = useState(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD')).replace('0:00:00', ''))
    const dispatch = useDispatch()
    useEffect(() => {
        const idProduct = window.location.hash.split('/')[2]
        dispatch({ type: 'DISABLE_DATE_WATCH', peyload: { idProduct } })
        dispatch({ type: 'GET_TICKETS_REDUCER_WATCH', peyload: { idProduct, date: moment(date).format('YYYY/M/D') } })
    }, [])
    useEffect(() => {
        if (state.disableDate.length > 0) {
            state.disableDate.map((i) => {
                setDisableDate([...disableDate, {
                    disabled: true,
                    start: i.date,
                    end: i.date
                },]
                )
            })
        }
        let newList = []
        if(state.getTicketsReducer.length > 0){
            listTime.map((time) => {
                console.log(time)
                state.getTicketsReducer.map((item) => {
                    console.log(item)
                    if (time.time === item.timee) {
                        newList.push({
                            time: time.time,
                            price: time.price,
                            disable: true
                        })
                    } else {
                        newList.push({
                            time: time.time,
                            price: time.price,
                            disable: false
                        })
                    }
                })
            })
        }
        console.log(newList)
        // let newList = []
        // let newList2 = []
        // if (state.getTicketsReducer.length > 0) {
        //     state.getTicketsReducer.map((item) => {
        //         newList.push({
        //             time: item.timee,
        //             price: item.price,
        //             disable: true
        //         })
        //     })

        // }
        // newList.concat(...listTime)

        setListTime(newList)


        // listTime.map((time) => {
        //     state.getTicketsReducer.map((item) => {
        //         if(time.time === item.timee){
        //             console.log('برابر')
        //         }else{
        //             console.log('نا برابر')
        //         }
        //     })
        // })

    }, [state])
    useEffect(() => {
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

                    {listTime.map((item, index) => {
                        if (item.disable) {
                            return (
                                <></>
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