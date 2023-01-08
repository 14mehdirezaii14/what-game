import React, { useState, useEffect } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment-jalaali";

const CalendarComponent = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [date, setDate] = useState()
    const [ChoiceDay, setChoiceDay] = useState(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD')).replace('0:00:00', ''))
    const [disableDate, setDisableDate] = useState([{
        disabled: true,
        start: momentJalaali().add(-1000, 'days'),
        end: momentJalaali().add(-1, 'days')
    }])

    useEffect(() => {
        dispatch({ type: 'setDate', peyload: { date: moment().format('YYYY/M/D') } })
    },[])

    // CHECK DISABLE DATE
    useEffect(() => {
        let newList = []
        let stateDisableDate = state.disableDate
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
        setDisableDate([{
            disabled: true,
            start: momentJalaali().add(-1000, 'days'),
            end: momentJalaali().add(-1, 'days')
        }
            , ...newList])
    }, [state.disableDate])


    const changeDate = (value) => {
        const date = value.format("YYYY/M/D")
        const idProduct = window.location.hash.split('/')[2]
        const dateStr = new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'medium', timeStyle: 'medium' }).format(value).replace('0:00:00', '')
        setDate(date)
        setChoiceDay(dateStr)
        dispatch({ type: 'setDate', peyload: { date: moment(date).format('YYYY/M/D') } })

        dispatch({ type: 'GET_SANS_WATCH', peyload: { idProduct, date: moment(date).format('YYYY/M/D') } })
    }

    return (
        <>
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
            <div>
                <p className="text-light my-4">روز انتخابی شما:  {ChoiceDay}</p>
            </div>
        </>
    )
}

export default CalendarComponent