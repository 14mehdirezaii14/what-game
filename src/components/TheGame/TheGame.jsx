import React from "react"
import { useEffect, useState } from "react";
import Navbar from "../global-components/navbar";
import './TheGame.css'
import Gameinformationbox from "../Gameinformationbox/Gameinformationbox"
import { useSelector, useDispatch } from 'react-redux'
const TheGame = () => {
    const [game, setGame] = useState()
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        if (state.escapeRoomsReducer.length < 1) {
            dispatch({ type: 'GET_ESCAPE_ROOMS' })
        }
    }, [])
    useEffect(() => {
        const idProduct = window.location.hash.split('/')[2]
        setGame(...state.escapeRoomsReducer.filter((item) => {
            return item.id == idProduct
        }))
    }, [state])
    return <div>
        <Navbar />
        <div className="divVideoGame position-relative">
            <video className="videoTagGame" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/ogg" />
                Your browser does not support HTML video.
            </video>
        </div>
        {game ? <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 text-right">
                    {/* scenario */}
                    <div>
                        <h3>سناریو</h3>
                        <p className="mt-5">
                            {game.scenario}
                        </p>
                    </div>
                    {/* Game tips */}
                    <div className="my-5">
                        <h3>نکات بازی</h3>
                        <p className="mt-5">
                            {game.gameTips}
                        </p>
                        {/* <a className="btn-read-more  ml-4" href="#/blog-details"><span>ادامه مطلب<i className="la la-arrow-left"></i></span></a> */}
                        {/*  */}
                        <div class="collapse" id="readMoreTheGame">
                            <div>
                                {game.viewMoreGameTips}
                            </div>
                        </div>

                        <a className="btn-read-more  ml-4" data-toggle="collapse" href="#readMoreTheGame" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span>ادامه مطلب<i className="la la-arrow-left"></i></span>
                        </a>



                    </div>
                    {/* Station escape room locks */}

                    <div>
                        <h3>قفل های اتاق فرار ایستگاه</h3>
                        <p className="mt-5">
                            برای آشنایی با قفل های این اتاق فرار بر روی اینجا کلیک کنید.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 text-left">
                    <Gameinformationbox game={game} />
                </div>

            </div>
        </div> : ''}
    </div>

}

export default TheGame