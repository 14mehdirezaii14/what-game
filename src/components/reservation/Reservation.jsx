import React, { useEffect, useState } from "react";
import Navbar from "../global-components/navbar";
import PageHeader from '../global-components/page-header';
import Gameinformationbox from "../Gameinformationbox/Gameinformationbox";
import './reservation.css';
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./step3/step3";
import Step4 from "./Step4/Step4";
import { useSelector, useDispatch } from 'react-redux'
import Broadcast from "../broadcast/Broadcast";

import Axios from "../../api/axios";
const Reservation = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [game, setGame] = useState()
    useEffect(() => {
        const idProduct = window.location.hash.split('/')[2]
        Axios.get('http://127.0.0.1:8000/EscapeRoomGet/').then((res) => {
            setGame(...res.data.filter((item) => {
                console.log(item.id == idProduct)
                return item.id == idProduct
            }))
        })
    }, [])
    useEffect(() => {
        console.log('change')
    }, [state])
    useEffect(() => {

        if (game) {
            console.log(game)
            dispatch({ type: 'nameGame', peyload: { nameGame: game.name } })
            dispatch({ type: 'setPrice', peyload: { price: game.price } })
            dispatch({ type: 'idGame', peyload: { idGame: game.id } })
        }
    }, [game])
    return (
        <>
            <Navbar />
            <PageHeader headertitle={'رزرو اتاق فرار ایستگاه'} img={`assets/img/reservation/julius-drost-Ariu17epnPk-unsplash.png`} />
            <Broadcast linkList={[{ src: '/', pageName: 'صفحه اصلی' }, { src: '/the-game', pageName: 'اتاق فرار ایستگاه' }, { src: '/', pageName: 'رزرو اتاق فرار ایستگاه' }]} />
            <div className="container my-5 ">
                <div className="row">
                    <div className="col-lg-9 text-right">
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
                    <div className="col-lg-3">
                        {game ? <Gameinformationbox game={game} /> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation