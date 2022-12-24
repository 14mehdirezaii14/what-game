import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
// {
//     genre,
//     name,
//     timee,
//     capacity,
//     degreeOfDifficult,
//     age,
//     price,
//     scenario,
//     gameTips,
//     viewMoreGameTips,
//     img
// }
const Gameinformationbox = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    let publicUrl = process.env.PUBLIC_URL + '/'
    useEffect(() => {
        console.log(state)
    }, [])
    return (
        <div className="Game-information-box py-5">
            {/* title */}
            <div className="d-flex title align-items-center px-4">
                <img src={publicUrl + "assets/img/the-game/anton-stasiuk-RqQ081i8HFA-unsplash 2.png"} alt="" />
                <h4 className="text-dark mr-5">{props.game.name}</h4>
            </div>
            {/* genre */}
            <div className="my-3  border-bottom d-flex justify-content-between px-4">
                <p className="text-right text-dark">
                    ژانر
                </p>
                <p className="text-left text-dark">
                    {props.game.genre}
                </p>
            </div>
            {/* time */}
            <div className="my-3  border-bottom d-flex justify-content-between px-4">
                <p className="text-right text-dark">
                    <i className="fa fa-clock-o fa-lg ml-2 "></i>
                    زمان

                </p>
                <p className="text-left text-dark">
                    {props.game.timee}
                </p>
            </div>
            {/* Capacity */}
            <div className="my-3  border-bottom d-flex justify-content-between px-4">
                <p className="text-right text-dark">
                    <i class="fa fa-users fa-lg ml-2"></i>
                    ظرفیت

                </p>
                <p className="text-left text-dark">
                    {props.game.capacity}
                </p>
            </div>
            {/* degree of difficulty */}
            <div className="my-3  border-bottom d-flex justify-content-between px-4">
                <p className="text-right text-dark">
                    <i class="fa fa-lock fa-lg ml-2"></i>
                    درجه سختی

                </p>
                <p className="text-left text-dark">
                    {props.game.degreeOfDifficulty}
                </p>
            </div>
            {/* age */}
            <div className="my-3  border-bottom d-flex justify-content-between px-4">
                <p className="text-right text-dark">
                    <i class="fa fa-exclamation fa-lg ml-2"></i>
                    سن

                </p>
                <p className="text-left text-dark">
                    {props.game.age}
                </p>
            </div>
            {/* Price (per person) */}
            <div className="my-3   d-flex justify-content-between px-4">
                <p className="text-right text-dark">
                    <i class="fa fa-dollar fa-lg ml-2"></i>
                    قیمت (برای هر نفر)

                </p>
                <p className="text-left text-dark">
                    {state.reservationInformation.price ? state.reservationInformation.price : props.game.price}

                </p>
            </div>
            <div className="px-4">
                <Link to={`/reservation/${props.game.name}`} className="btn btn-block btn-game-reservation">رزرو بازی</Link>
            </div>
        </div>
    )
}

export default Gameinformationbox