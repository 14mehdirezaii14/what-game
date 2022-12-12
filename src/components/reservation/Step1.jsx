import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

const Step1 = () => {
    const [stateBtn, setStateBtn] = useState(true)
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h4 className="mt-5">
                        قوانین و مقررات
                    </h4>
                    <p>
                        بدین وسیله اینجانبان، خریداران سانس بازی، اعلام میداریم که از مفاد قوانین بازی آگاهی داشته و نسبت به آن اعلام تعهد مینماییم.

                        <br /> ۱- سن مجاز برای شرکت در بازی حداقل ۱۸ سال تمام است.

                        <br /> ۲- این بازی برای کسانی که ناراحتی های جسمی خاص ( بیماری قلبی، تنفسی، اعصاب و روان و... ) دارند ممنوع می باشد.

                        <br /> ۳- عوامل مجموعه از پذیرفتن افرادی که در شرایط عادی نیستند معذور می باشند.

                        <br /> ۴- مسئولیت هرگونه آسیب جسمی به بازیکنان و عوامل مجموعه که به علت سهل انگاری و یا تعمد بازیکن بوجود آید، صرفا به عهده بازیکنان می باشد.

                        <br />  ۵- هرگونه بی احترامی اعم از فیزیکی یا لفظی به عوامل مجموعه از سمت بازیکنان، ممنوع می باشد.

                        <br /> ۶- مسئولیت پرداخت خسارت هرگونه آسیب به وسایل و دکور مجموعه، به عهده بازیکنان می باشد.

                        <br />  ۷- تاخیر برای حضور در محل از سمت بازیکنان، در وحله اول( تا ۱۵ دقیقه) باعث کاسته شدن از زمان بازی و بیشتر از آن موجب لغو بازی می گردد. <br />

                        هرگونه تخطی از موارد بالا و یا آگاهی تیم اجرا کننده از عدم رعایت مفاد فوق توسط بازیکنان، در هر زمان از بازی به تیم اجرا کننده این حق را میدهد که ادامه کار را متوقف و بدون عودت هزینه رزرو، بازی را تعطیل و سانس را کنسل نمایند.
                    </p>
                    <div className="d-flex mt-4">
                        <input onClick={() => setStateBtn(false)} type="checkBox" id="checkBoxStep1" />
                        <label htmlFor="checkBoxStep1" className="mr-2">قوانین فوق را مطالعه نمودم و تمامی موارد را می پذیرم.</label>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <button className="btn btn-gray" disabled={stateBtn}>قبلی</button>
                        <button className="btn btn-game-reservation" onClick={() => dispatch({ type: 'step1' })} disabled={stateBtn}>بعدی</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step1