import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingWorld extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="upcomming-world pd-top-108 viaje-go-top">
			<div className="container">
				<div className="row">
					<div className="col-xl-7 col-lg-8">
						<div className="section-title">
							<h2 className="title text-right">اتاق های فعال</h2>
						</div>
					</div>
				</div>
			</div>
			<div style={{ direction: 'ltr' }} className="upcomming-card-slider upcomming-card-slider-1 tp-common-slider-style">
				{/* single card */}
				<div className="single-upconing-card">
					<div className="shadow" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png)' }}>
						<img src={publicUrl + "assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png"} alt="flag" />
					</div>
					{/* content modal */}
					<div className="content text-center w-100 bg-dark">
						<div className='w-100'>
							{/* title */}
							<h3 className="title text-center">
								Title
							</h3>
							{/* genre */}
							<p className="float-right text-light">
								ترسناک
							</p>
							{/* number of people */}
							<p className="float-left d-flex text-light">

								4 تا 7 نفر
							</p>
							<img className='position-relative pt-1 pl-2' src={publicUrl + "assets/img/icons/users.svg"} />
							<br />
							{/* time */}
							<div>
								<i className='fa fa-clock text-light float-right pt-2 pl-3'></i>
								<span className='float-right text-light'>90 دقیقه</span>
							</div>
							{/* lock icon */}
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-light float-left  pt-2 pl-3'></i>

						</div>
					</div>
				</div>
				{/* single card */}
				<div className="single-upconing-card">
					<div className="shadow" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png)' }}>
						<img src={publicUrl + "assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png"} alt="flag" />
					</div>
					{/* content modal */}
					<div className="content text-center w-100 bg-dark">
						<div className='w-100'>
							{/* title */}
							<h3 className="title text-center">
								Title
							</h3>
							{/* genre */}
							<p className="float-right text-light">
								ترسناک
							</p>
							{/* number of people */}
							<p className="float-left d-flex text-light">

								4 تا 7 نفر
							</p>
							<img className='position-relative pt-1 pl-2' src={publicUrl + "assets/img/icons/users.svg"} />
							<br />
							{/* time */}
							<div>
								<i className='fa fa-clock text-light float-right pt-2 pl-3'></i>
								<span className='float-right text-light'>90 دقیقه</span>
							</div>
							{/* lock icon */}
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-light float-left  pt-2 pl-3'></i>

						</div>
					</div>
				</div>
				{/* single card */}
				<div className="single-upconing-card">
					<div className="shadow" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png)' }}>
						<img src={publicUrl + "assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png"} alt="flag" />
					</div>
					{/* content modal */}
					<div className="content text-center w-100 bg-dark">
						<div className='w-100'>
							{/* title */}
							<h3 className="title text-center">
								Title
							</h3>
							{/* genre */}
							<p className="float-right text-light">
								ترسناک
							</p>
							{/* number of people */}
							<p className="float-left d-flex text-light">

								4 تا 7 نفر
							</p>
							<img className='position-relative pt-1 pl-2' src={publicUrl + "assets/img/icons/users.svg"} />
							<br />
							{/* time */}
							<div>
								<i className='fa fa-clock text-light float-right pt-2 pl-3'></i>
								<span className='float-right text-light'>90 دقیقه</span>
							</div>
							{/* lock icon */}
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-light float-left  pt-2 pl-3'></i>

						</div>
					</div>
				</div>
				{/* single card */}
				<div className="single-upconing-card">
					<div className="shadow" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png)' }}>
						<img src={publicUrl + "assets/img/tour/anton-stasiuk-RqQ081i8HFA-unsplash 1.png"} alt="flag" />
					</div>
					{/* content modal */}
					<div className="content text-center w-100 bg-dark">
						<div className='w-100'>
							{/* title */}
							<h3 className="title text-center">
								Title
							</h3>
							{/* genre */}
							<p className="float-right text-light">
								ترسناک
							</p>
							{/* number of people */}
							<p className="float-left d-flex text-light">

								4 تا 7 نفر
							</p>
							<img className='position-relative pt-1 pl-2' src={publicUrl + "assets/img/icons/users.svg"} />
							<br />
							{/* time */}
							<div>
								<i className='fa fa-clock text-light float-right pt-2 pl-3'></i>
								<span className='float-right text-light'>90 دقیقه</span>
							</div>
							{/* lock icon */}
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-warning float-left  pt-2 pl-3'></i>
							<i className='fa fa-lock text-light float-left  pt-2 pl-3'></i>

						</div>
					</div>
				</div>
				
				
				
				

			</div>
		</div>


	}
}

export default UpcomingWorld