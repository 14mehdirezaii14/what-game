import React from "react"
import Navbar from "../global-components/navbar";
import './TheGame.css'
import Gameinformationbox from "../Gameinformationbox/Gameinformationbox";
const TheGame = () => {
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
            <div className="row">
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
                        {/* <a className="btn-read-more  ml-4" href="#/blog-details"><span>ادامه مطلب<i className="la la-arrow-left"></i></span></a> */}
                        {/*  */}
                        <div class="collapse" id="readMoreTheGame">
                            <div>
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                <div className="col-md-3 text-left">
                    <Gameinformationbox />
                </div>

            </div>
        </div>
    </div>

}

export default TheGame