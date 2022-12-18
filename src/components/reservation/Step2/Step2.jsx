import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';

import { useSelector, useDispatch } from 'react-redux'

const Step2 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const [date, setDate] = useState(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD'))
    const [time, setTime] = useState('انتخاب سانس')
    const [numberOfPeople, setNumberOfPeople] = useState('انتخاب نفرات')
    const datePickerRef = useRef(null)
    const state = useSelector((state) => state)

    const [ChoiceDay,setChoiceDay] = useState(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD')).replace('0:00:00', ''))
    const dispatch = useDispatch()

    useEffect(() => {
        if (time !== 'انتخاب سانس' && numberOfPeople !== 'انتخاب نفرات') {
            setStateBtn(false)
        }
    }, [numberOfPeople, time])

    const next = () => {
        dispatch({ type: 'setDate', peyload: { date, numberOfPeople, time } })
        dispatch({ type: 'step2' })
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
                    ranges={[
                        {
                            disabled: true,
                            start: momentJalaali().add(-1000, 'days'),
                            end: momentJalaali().add(-1, 'days')
                        },
                        {
                            disabled: true,
                            start: '2022/12/17',
                            end: '2022/12/16'
                        },



                    ]}
                    inputFormat="YYYY/MM/DDD"
                    isGregorian={false}
                    // ref={datePickerRef}
                    onChange={value => {
                        console.log(value.format("YYYY/M/D"))
                        console.log(moment(value).jDate())
                        setDate(value.format("YYYY/M/D"))
                        setChoiceDay(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(value).replace('0:00:00', ''))

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
                    {time}

                </a>
                <div className="dropdown-menu w-100 text-right" ariaLabelledby="dropdownMenuButton">
                    {/*  */}
                    <a type="button" onClick={() => setTime('ساعت 18')} className=" py-2 px-3 text-right btn-block" >
                        ساعت 18
                    </a>
                    {/*  */}
                </div>
            </div>
            {/* number of people */}
            <p className="mt-4 text-light">تعداد افراد</p>
            <div className="dropdown ">
                <a href="#" className="ChooseAnHour py-2 px-3 text-right btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {numberOfPeople}
                </a>
                <div className="dropdown-menu w-100 text-right" ariaLabelledby="dropdownMenuButton">
                    {/*  */}
                    <a type="button" onClick={() => setNumberOfPeople('5 نفر ')} className=" py-2 px-3 text-right btn-block" >
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