import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Offer extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="offer-area pd-top-70 mb-5">
			{/* <div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<div className="section-title text-center">
							<h2 className="title">Special offers &amp; Discounts</h2>
							<p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
						</div>
					</div>
				</div>
			</div> */}
			<div className="destinations-list-slider-bg" style={{ direction: 'rtl' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 ">
							<div className="container px-5 py-5">
								<h3 className='text-light'>
									سورپرایز در مناسبت ها
								</h3>
								<p className="mt-5 text-right">
									تا حالا فکر کردین برای سورپرایز و غافلگیر کردن عزیزانتون در مناسبت های مختلف مثل تولد یا سالگرد آشنایی و.... ، فضا و حال و هوای متفاوتی رو انتخاب کنید؟!
									چه جایی متفاوت تر و جذاب تر از یک اتاق فرار خوب و عالی؟!
								</p>
							</div>
						</div>
						<div className="col-lg-9">
							<div className="row">
								<div className="col-md-4">
									<div className="p-3">
										<img src="/assets/img/raychan-Q3Vefy3v7L0-unsplash.png" className='rounded  img-fluid w-100' alt="" />									</div>
								</div>
								<div className="col-md-4">
									<div className="p-3">
										<img src="/assets/img/aral-tasher-DKaSZmMCyP0-unsplash.png" className='rounded img-fluid w-100' alt="" />									</div>
								</div>
								<div className="col-md-4">
									<div className="p-3">
										<img src="/assets/img/danielle-suijkerbuijk-8D__BFusfUQ-unsplash (1).png" className='rounded img-fluid w-100' alt="" />									</div>
								</div>

							</div>
						</div>




						{/* <div className="d-list-slider-item">
							<div className="single-destinations-list text-center">
								<div className="thumb">
									<img src={publicUrl + "assets/img/destination-list/2.png"} alt="list" />
									<div className="d-list-btn-wrap">
										<div className="d-list-btn viaje-go-top">
											<Link className="btn btn-yellow" to="/contact">Book Now <i className="fa fa-paper-plane" /></Link>
										</div>
									</div>
								</div>
								<div className="details">
									<h4 className="title">Italy</h4>
									<p className="content">Atmosphere of the sunny country</p>
									<ul className="tp-list-meta border-bt-dot">
										<li><i className="fa fa-calendar-o" /> 8oct</li>
										<li><i className="fa fa-clock-o" /> 4 days</li>
										<li><i className="fa fa-star" /> 4.3</li>
									</ul>
									<div className="tp-price-meta tp-price-meta-cl">
										<p>Price</p>
										<h2>620 <small>$</small></h2>
										<del>620<span>$</span></del>
									</div>
								</div>
							</div>
						</div> */}


					</div>
				</div>
			</div>
		</div>


	}
}

export default Offer