import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';
import Slider from "react-slick";



const UpcomingWorld = () => {
	const slider = useRef();
	const [activeRooms, setActiveRooms] = useState([]);
	let publicUrl = process.env.PUBLIC_URL + '/'
	useEffect(() => {
		axios.get('/product.json').then((res) => {
			console.log("<><><><><><><><><><><><><><><>", res.data)
			setActiveRooms(res.data)
		})
	}, [])
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerMode: true,
		prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
		dots: false,
		centerPadding: '450px',

	};

	const next = () => slider.current.slickNext();
	const previous = () => slider.current.slickPrev();
	return (
		<>
			{activeRooms ? <div className="upcomming-world pd-top-108 viaje-go-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="section-title">
								<h2 className="title text-right">اتاق های فعال</h2>
							</div>
						</div>
					</div>
				</div>
				<div style={{ direction: 'ltr' }} className=" tp-common-slider-style">
					{/* single card */}


					<div className="d-flex ml-3">
						<span className="slick-prev slick-arrow" onClick={previous} style={{ display: 'block' }}><i className="la la-long-arrow-left"></i></span>
						<span className="slick-next slick-arrow" onClick={next} style={{ display: 'block' }}><i className="la la-long-arrow-right"></i></span>
					</div>
					<Slider ref={slider} arrows={false} dotsClass={'d-none'} dots={false}  {...settings}>

						{activeRooms.map(function (slide, index) {
							return (

								<div key={index} className="single-upconing-card">
									<Link to={`/the-game/${slide.name}`}>
										<div className="shadow" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png)' }}>
											<img src={publicUrl + slide.img} alt="flag" />
										</div>
										{/* content modal */}
										<div className="content text-center w-100 bg-dark">
											<div className='w-100'>
												{/* title */}
												<h3 className="title text-center">
													{slide.name}
												</h3>
												{/* genre */}
												<p className="float-right text-light">
													{slide.genre}
												</p>
												{/* number of people */}
												<p className="float-left d-flex text-light">
													{slide.capacity}
												</p>
												<img className='position-relative pt-1 pl-2' src={publicUrl + "assets/img/icons/users.svg"} />
												<br />
												{/* time */}
												<div>
													<i className='fa fa-clock text-light float-right pt-2 pl-3'></i>
													<span className='float-right text-light'>{slide.timee}</span>
												</div>
												{/* lock icon */}
												<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
												<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
												<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
												<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
												<i className='fa fa-lock text-light float-left  pt-2 pl-3'></i>

											</div>
										</div>
									</Link>
								</div>

							);
						})}
					</Slider>



				</div>
			</div> : ''}

		</>
	)
}
export default UpcomingWorld