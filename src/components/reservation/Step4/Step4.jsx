import React,{useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import reservationApi from "../../../api/reservationApi"
const Step4 = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    let publicUrl = process.env.PUBLIC_URL + '/'

    const payment = () => {
        console.log(state)
        reservationApi(state.reservationInformation)
    }
    return (
        <>
            <h3 className="my-5 py-5">
                تایید نهایی
            </h3>
            <p className="my-5">
                موارد درج شده را مرور نمایید و درصورت درست بودن اطلاعات روی پرداخت کلیک کنید.
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">محصول</th>
                        <th scope="col">قیمت</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">مبلغ قابل پرداخت</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <img width={70} src={publicUrl + "assets/img/the-game/anton-stasiuk-RqQ081i8HFA-unsplash 2.png"} alt="" />
                            <span>اتاق فرار ایستگاه</span>
                        </th>
                        <th>
                            <p>۱۰۵،۰۰۰ تومان</p>
                        </th>
                        <th>
                            <p>5</p>
                        </th>
                        <th>
                            <p>۵۲۵،۰۰۰ تومان</p>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-between mt-5" >
                <button className="btn btn-gray" onClick={() => dispatch({ type: 'step2' })} >قبلی</button>
                <button className="btn btn-game-reservation"  onClick={payment}>پرداخت</button>
            </div>
        </>
    )
}

export default Step4