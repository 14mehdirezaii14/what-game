import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="footer-area" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/Footer.png)' }}>
				<div className="container z1" style={{ zIndex: 1 }}>
					<div className="row text-right">
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget widget">
								<div className="about_us_widget">
									<Link to="/" className="footer-logo d-flex align-items-center">

										<img src={publicUrl + "assets/img/MyLogo.png"} width={50} height={50} alt="footer logo" />
										<span className='text-light'>بازی چی</span>
									</Link>
									<p>
										بازی و سرگرمی جزئی جدانشدنی از زندگی بشر بوده و هست. به عقیده ما، بازی هم مثل هوا برای زندگی واجبه.
										" بازیچی " در سال ۱۴۰۰ تشکیل شد تا بتونه با همراهی همه شما بازی دوستان، کمکی برای صنعت بازی و سرگرمی این سرزمین باشه.
										این راه رو از "اتاق فرار" شروع کرد و امیدواریم بتونه راههای جدیدی رو برای همه باز کنه.

									</p>
									<div className="d-flex mb-5">
										<div className="bg-light rounded">
											<img src={publicUrl + "assets/img/Electronic-trust-symbol.png"} alt="" />ّ
										</div>
										<div className="bg-light rounded mr-5">
											<img src={publicUrl + "assets/img/National-mark-of-registration.png"} alt="" />ّ
										</div>
									</div>
									<ul className="social-icon">
										<li>
											<a href="/" target="_blank"><i className="fa fa-instagram  " /></a>
										</li>
										<li>
											<a href="/" target="_blank"><i className="fa fa-whatsapp  " /></a>
										</li>

									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget widget ">
								<div className="widget-contact">
									<h4 className="widget-title">دسترسی سریع</h4>

									<ul className='widget_nav_menu  viaje-go-top'>
										<li className='text-light my-4'>
											<Link href='/'>
												اتاق فرار
											</Link>
										</li>
										{/*  */}
										<li className='text-light my-4'>
											<Link href='/'>
												قوانین و مقررات
											</Link>
										</li>
										{/*  */}
										<li className='text-light my-4'>
											<Link href='/'>
												وبلاگ
											</Link>
										</li>
										{/*  */}
										<li className='text-light my-4'>
											<Link href='/'>
												درباره ما
											</Link>
										</li>
										{/*  */}
										<li className='text-light my-4'>
											<Link href='/'>
												ارتباط با ما
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget widget widget-contact">
								<h4 className="widget-title">ارتباط با ما</h4>
								<ul className="widget_nav_menu  viaje-go-top">
									<li>
										<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10889.969851145112!2d51.400949339742624!3d35.76045313096898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1670674802312!5m2!1sfa!2s" width={400} height={250}  ></iframe>
									</li>
									<p>
										<i className="fa fa-map-marker" />
										<span>Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh</span>
									</p>
									<p className="location">
										<i className="fa fa-envelope-o" />
										<span>travelpoint@gmail.com</span>
									</p>
									<p className="telephone">
										<i className="fa fa-phone base-color" />
										<span>
											+088 012121240
										</span>
									</p>
								</ul>
							</div>
						</div>
						{/* <div className="col-lg-3 col-md-6">
							<div className="footer-widget widget">
								<h4 className="widget-title">Instagram Gallery</h4>
								<ul className="widget-instagram-feed">
									<li><a href="#"><img src={publicUrl + "assets/img/instagram/1.png"} alt="img" /></a></li>
									<li><a href="#"><img src={publicUrl + "assets/img/instagram/2.png"} alt="img" /></a></li>
									<li><a href="#"><img src={publicUrl + "assets/img/instagram/3.png"} alt="img" /></a></li>
									<li><a href="#"><img src={publicUrl + "assets/img/instagram/4.png"} alt="img" /></a></li>
									<li><a href="#"><img src={publicUrl + "assets/img/instagram/5.png"} alt="img" /></a></li>
									<li><a href="#"><img src={publicUrl + "assets/img/instagram/6.png"} alt="img" /></a></li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
				<div className="copyright-inner" style={{ direction: 'ltr' }}>
					<div className="copyright-text">
						© Baazi Chi 2022 All rights reserved. Powered with <a href="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>by Nilva</span></a>
					</div>
				</div>
			</footer>


		)
	}
}


export default Footer_v1