import React from "react"
import Navbar from "../global-components/navbar";
import PageHeader from '../global-components/page-header';
import './TheGame.css'
const TheGame = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <div className="divVideoGame position-relative">
            <video className="videoTagGame" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/ogg" />
                Your browser does not support HTML video.
            </video>
        </div>
        <div className="container mt-5">
            <duv className="row">
                <div className="col-md-9 text-right">
                    {/* scenario */}
                    <div>
                        <h3>سناریو</h3>
                        <p className="mt-5">
                            شما و گروهی
                            از دوستانتون قصد رفتن به سفری تفریحی و مهیج رو دارید. آماده سفر میشید ولی بعد ا
                            ز رفتن به ایستگاه متوجه وجود قطاری میشید که فقط در ایستگاه های محلی توقف میک
                            نه و از ایستگاه روستای مرموزی گذر میکنه به اسم " آزار". داستانهای عجیب
                            ی درمورد اون روستا گفته میشه، ازجمله اینکه همه مردمش یا به طرز ع
                            جیبی مردن و یا از اونجا فرار کردن! اون ایستگاه فقط یک مسافر دا
                            ره و هیچ شخص دیگری در روستا زندگی نمیکنه! "اکبرخا
                            ن سلطانی" خان روستا و تنها شخصی هست که به
                            اونجا رفت و آمد میکنه. شما تصمیم میگ
                            یرید این بار با اون همسفر بشید، واین میتونه براتون خیلی گرون تموم بشه!
                        </p>
                    </div>
                    {/* Game tips */}
                    <div className="my-5">
                        <h3>نکات بازی</h3>
                        <p className="mt-5">
                            شاید برای بعضی بازیکنها تکراری باشن ولی بازم لطف کنید و مطالعه کنید و به دوستانتون هم اطلاع بدید: <br />

                            *پیش از بازی حتما سناریو بازی رو بخونید.
                            <br />
                            *زودتر و یا دیرتر از زمان بازی در محل حاضر نشید.
                        </p>
                        <a className="btn-read-more  ml-4" href="#/blog-details"><span>ادامه مطلب<i className="la la-arrow-left"></i></span></a>
                    </div>
                    {/* Station escape room locks */}

                    <div>
                        <h3>قفل های اتاق فرار ایستگاه</h3>
                        <p className="mt-5">
                        برای آشنایی با قفل های این اتاق فرار بر روی اینجا کلیک کنید.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 text-left">
                    <div className="Game-information-box py-5">
                        {/* title */}
                        <div className="d-flex title align-items-center px-4">
                            <img src={publicUrl + "assets/img/the-game/anton-stasiuk-RqQ081i8HFA-unsplash 2.png"} alt="" />
                            <h4 className="text-dark mr-5">اتاق فرار ایستگاه</h4>
                        </div>
                        {/* genre */}
                        <div className="my-3  border-bottom d-flex justify-content-between px-4">
                            <p className="text-right text-dark">
                                ژانر
                            </p>
                            <p className="text-left text-dark">
                                ترسناک - جنایی
                            </p>
                        </div>
                        {/* time */}
                        <div className="my-3  border-bottom d-flex justify-content-between px-4">
                            <p className="text-right text-dark">
                                <i className="fa fa-clock-o fa-lg ml-2 "></i>
                                زمان

                            </p>
                            <p className="text-left text-dark">
                                ۹۰ دقیقه
                            </p>
                        </div>
                        {/* Capacity */}
                        <div className="my-3  border-bottom d-flex justify-content-between px-4">
                            <p className="text-right text-dark">
                                <i class="fa fa-users fa-lg ml-2"></i>
                                ظرفیت

                            </p>
                            <p className="text-left text-dark">
                                ۴ تا ۷ نفر
                            </p>
                        </div>
                        {/* degree of difficulty */}
                        <div className="my-3  border-bottom d-flex justify-content-between px-4">
                            <p className="text-right text-dark">
                                <i class="fa fa-lock fa-lg ml-2"></i>
                                درجه سختی

                            </p>
                            <p className="text-left text-dark">
                                ۸ از ۱۰
                            </p>
                        </div>
                        {/* age */}
                        <div className="my-3  border-bottom d-flex justify-content-between px-4">
                            <p className="text-right text-dark">
                                <i class="fa fa-exclamation fa-lg ml-2"></i>
                                سن

                            </p>
                            <p className="text-left text-dark">
                                +۱۸
                            </p>
                        </div>
                        {/* Price (per person) */}
                        <div className="my-3   d-flex justify-content-between px-4">
                            <p className="text-right text-dark">
                                <i class="fa fa-dollar fa-lg ml-2"></i>
                                قیمت (برای هر نفر)

                            </p>
                            <p className="text-left text-dark">

                                ۱۳۰،۰۰۰
                                تومان
                            </p>
                        </div>
                        <div className="px-4">
                            <button className="btn btn-block btn-game-reservation">رزرو بازی</button>
                        </div>
                    </div>
                </div>

            </duv>
        </div>
    </div>

}

export default TheGame