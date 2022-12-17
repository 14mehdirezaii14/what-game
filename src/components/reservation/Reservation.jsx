import React, { useEffect } from "react";
import Navbar from "../global-components/navbar";
import PageHeader from '../global-components/page-header';
import Gameinformationbox from "../Gameinformationbox/Gameinformationbox";
import './reservation.css';
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./step3/step3";
import Step4 from "./Step4/Step4";
import { useSelector, useDispatch } from 'react-redux'
const Reservation = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(state)
    }, [state])
    return (
        <>
            <Navbar />
            <PageHeader img={`assets/img/reservation/julius-drost-Ariu17epnPk-unsplash.png`} />
            <div className="container my-5 ">
                <div className="row">
                    <div className="col-md-9 text-right">
                        {/* counter steper */}
                        <div className="d-flex justify-content-around stepUi mb-5">
                            <div className={`step1 ${state.reservation.step !== 1 ? 'stepYellow step1AfterYellow' : null} d-inline-block text-center`}>
                                <span className="">1</span>


                                <div className="mt-4">
                                    قوانین و مقررات
                                </div>

                            </div>
                            <div className={`step2  ${state.reservation.step >= 2 ? ' step2Yellow' : null} ${state.reservation.step >= 3 ? 'stepYellow step2AfterYellow' : null} d-inline-block text-center`}>
                                <span className="">2</span>
                                <div className="mt-4 mr-2">
                                    تعیین زمان
                                </div>
                            </div>
                            <div className={`step3 ${state.reservation.step >= 3 ? 'progressStep3' : null} ${state.reservation.step === 4 ? 'completeStep3' : null} d-inline-block text-center`}>
                                <span className="">3</span>
                                <div className="mt-4">
                                    ثبت اطلاعات
                                </div>
                            </div>
                            <div className={`step4 ${state.reservation.step === 4 ? 'progressStep4' : null} d-inline-block text-center`}>
                                <span className="">4</span>
                                <div className="mt-4">
                                    تایید نهایی
                                </div>
                            </div>
                        </div>
                        {
                            state.reservation.step === 1 ?
                                <Step1 /> : state.reservation.step === 2 ?
                                    <Step2 /> : state.reservation.step === 3 ?
                                        <Step3 /> : <Step4 />
                        }

                    </div>
                    <div className="col-md-3">
                        <Gameinformationbox />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation