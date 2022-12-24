import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

const Step3 = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const [stateBtn, setStateBtn] = useState(true)
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    useEffect(() => {
        console.log(state)
        if (name  && lastName  && email && phone ) {
            setStateBtn(false)
        }
        console.log(lastName)
    }, [name, lastName, email, phone])
    const next = () => {
        console.log(name)
        dispatch({ type: 'UserProfile', peyload: { name, lastName, email, phone } })
        dispatch({ type: 'step3' })
    }
    return (
        <>
            <h3 className="mt-5 pt-5">
                ثبت اطلاعات
            </h3>
            <p className="mt-5 pt-5">در این گام اطلاعات خود و یا یکی از اعضای گروهتان را وارد نمایید.</p>
            <div className="row">
                {/* name */}
                <div className="col-md-6 my-3">
                    <span>نام</span>
                    <input value={name} onChange={e => {
                        console.log(e.target.value)
                        setName(e.target.value)
                    }} type="text" className="form-control input" />
                </div>
                {/* last Name */}
                <div className="col-md-6 my-3">
                    <span>نام خانوادگی</span>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control input" />
                </div>
                {/* Email */}
                <div className="col-md-6 my-3">
                    <span>ایمیل (جهت ارسال فاکتور)</span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control input" />
                </div>
                {/* phone */}
                <div className="col-md-6 my-3">
                    <span>شماره تماس</span>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control input" />
                </div>

            </div>
            <div className="d-flex justify-content-between mt-5" >
                <button className="btn btn-gray" onClick={() => dispatch({ type: 'step1' })}>قبلی</button>
                <button className="btn btn-game-reservation" onClick={next} disabled={stateBtn}>بعدی</button>
            </div>
        </>
    )
}

export default Step3