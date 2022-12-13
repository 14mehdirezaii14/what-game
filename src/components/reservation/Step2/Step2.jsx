import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';


const Step2 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const [value, setValue] = useState(momentJalaali(moment().format('jYYYY/jM/jD'), 'jYYYY/jM/jD'))
    const datePickerRef = useRef(null)
    useEffect(() => {
        // console.log(momentJalaali().add(2, 'days'))
        // console.log(momentJalaali().subtract('1401/9/24', 'day'))
        console.log(new Date().toLocaleDateString())
    }, [value])
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
                    value={value}
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
                    inputFormat="YYYY/M/D"
                    isGregorian={false}
                    // ref={datePickerRef}
                    onChange={value => {
                        console.log(value.format("YYYY/M/D"))
                        setValue(value)
                    }}
                    timePicker={false}
                    

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
            <div className="d-flex justify-content-between mt-5" >
                <button className="btn btn-gray" disabled={stateBtn}>قبلی</button>
                <button className="btn btn-game-reservation" disabled={stateBtn}>بعدی</button>
            </div>
        </div>
    )
}

export default Step2