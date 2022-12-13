import React, { useEffect } from "react";
import Navbar from "../global-components/navbar";
import PageHeader from '../global-components/page-header';
import Gameinformationbox from "../Gameinformationbox/Gameinformationbox";
import './reservation.css';
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import { useSelector, useDispatch } from 'react-redux'
const Reservation = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(state)
    }, [])
    return (
        <>
            <Navbar />
            <PageHeader img={`assets/img/reservation/julius-drost-Ariu17epnPk-unsplash.png`} />
            <div className="container my-5 ">
                <div className="row">
                    <div className="col-md-9 text-right">
                        {/* counter steper */}
                        <div className="stepUi mb-5">
                            <div className={`step1 ${state.step !== 1 ? 'stepYellow step1AfterYellow' : null} d-inline-block`}>
                                <span className="">1</span>


                                <div className="mt-4">
                                    قوانین و مقررات
                                </div>


                            </div>
                            <div className="step2 d-inline-block">
                                <span className="">2</span>
                                <div className="mt-4 mr-2">
                                    تعیین زمان
                                </div>
                            </div>
                            <div className="step3 d-inline-block">
                                <span className="">3</span>
                                <div className="mt-4">
                                    ثبت اطلاعات
                                </div>
                            </div>
                            <div className="step4 d-inline-block">
                                <span className="">4</span>
                                <div className="mt-4">
                                    تایید نهایی
                                </div>
                            </div>
                        </div>
                        {
                            state.step === 1 ?
                                <Step1 /> : state.step === 2 ?
                                    <Step2 /> : state.step === 3 ?
                                        'step3' : 'step4'
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