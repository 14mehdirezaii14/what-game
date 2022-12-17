import React from "react"
import { useSelector, useDispatch } from 'react-redux'

const Step4 = () => {
    const dispatch = useDispatch()
    let publicUrl = process.env.PUBLIC_URL + '/'
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
                <button className="btn btn-game-reservation"  >پرداخت</button>
            </div>
        </>
    )
}

export default Step4