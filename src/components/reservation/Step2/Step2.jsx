import moment from "moment-jalaali";
import React, { useState, useEffect, useRef } from "react";
import { Calendar } from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
import CalendarComponent from "./CalendarComponent";
import { useSelector, useDispatch } from 'react-redux'
import ChooseAnHour from "./ChooseAnHour";
const Step2 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const [numberOfPersons, setNumberOfPersons] = useState('انتخاب نفرات')
    const state = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(() => {
        const idProduct = window.location.hash.split('/')[2]
        // GET SANS
        dispatch({ type: 'GET_SANS_WATCH', peyload: { idProduct, date: moment().format('YYYY/M/D') } })
        dispatch({ type: "DISABLE_DATE_WATCH", peyload: { idProduct } })
    }, [])
    useEffect(() => {
        console.log(state)
    }, [state])


    useEffect(() => {
        // ACTIVE BTN NEXT
        if (state.reservationInformation.timee !== 'انتخاب سانس' && numberOfPersons !== 'انتخاب نفرات') {
            setStateBtn(false)
        }
    }, [numberOfPersons, state.reservationInformation.timee])

    const next = () => {
        dispatch({ type: 'step2' })
    }

    return (
        <div className="py-5 my-5">
            <CalendarComponent />
            {/* Choose an hour */}
            <ChooseAnHour />
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