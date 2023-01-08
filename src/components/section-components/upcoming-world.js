import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux'
import { SERVER_DOMAIN } from '../../constants/global';
const UpcomingWorld = () => {
	const slider = useRef();
	const [activeRooms, setActiveRooms] = useState([]);
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	let publicUrl = process.env.PUBLIC_URL + '/'
	useEffect(() => {
		dispatch({ type: 'GET_ESCAPE_ROOMS' })
	}, [])
	useEffect(() => {
		setActiveRooms(state.escapeRoomsReducer)
	}, [state])
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		
		responsive: [
			{
				breakpoint: 2348,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				},
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]

	};

	const next = () => slider.current.slickNext();
	const previous = () => slider.current.slickPrev();
	return (
		<>
			<div className="upcomming-world pd-top-108 viaje-go-top mb-5 pb-5">
				<div className="container ">
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


					<div className="d-flex ml-3 mb-3">
						<span className="slick-prev slick-arrow mr-4" onClick={previous} style={{ display: 'block' }}><i className="la la-long-arrow-left"></i></span>
						<span className="slick-next slick-arrow" onClick={next} style={{ display: 'block' }}><i className="la la-long-arrow-right"></i></span>
					</div>
					{!activeRooms ? null :
						<Slider infinite={false} ref={slider} arrows={false} dotsClass={'d-none'} dots={false}  {...settings}>
							{activeRooms.map((slide, index) => {
								return (

									<div data-index={index} key={slide.id} className="single-upconing-card">
										<Link to={`/the-game/${slide.id}`}>
											<div width={500} height={500} className="shadow" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png)' }}>
												<img src={SERVER_DOMAIN + slide.img} className='img-fluid w-100' alt="flag" />
											</div>
											{/* content modal */}
											<div className="content text-center w-100 ">
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


						</Slider>}



				</div>
			</div>

		</>
	)
}
export default UpcomingWorld