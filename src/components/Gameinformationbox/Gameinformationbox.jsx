import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVER_DOMAIN } from "../../constants/global";
import { useSelector, useDispatch } from 'react-redux'

const Gameinformationbox = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    let publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <div className="Game-information-box py-5">
            {/* title */}
            <div className="d-flex title text-center align-items-center px-4">
                <img src={SERVER_DOMAIN + props.game.img} width={100} height={100} alt="" />
                <h5 className="text-dark text-center  pr-3">{props.game.name}</h5>
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
                <Link to={`/reservation/${props.game.id}`} className="btn btn-block btn-game-reservation">رزرو بازی</Link>
            </div>
        </div>
    )
}

export default Gameinformationbox