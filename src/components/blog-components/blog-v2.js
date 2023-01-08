import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogV2 extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'
		return (
			<div className="blog-list-area pd-top-120 viaje-go-top">
				<div className="container">
					<div className="row justify-content-center">
						
						{/*  */}
						<div className="col-lg-3 col-md-6">
							<div className="single-blog text-right px-3 py-4">
								<div className="thumb">
									<img src={publicUrl + "assets/img/blog/3.png"} alt="blog" />
									{/* <Link className="tag" to="/blog">Europe</Link> */}
								</div>
								<div className="single-blog-details">

									<h4 className="title"><Link to="/blog-details">اتاق فرار چیست؟</Link></h4>
									<p className="content">
										اتاق قرار یک پدیده نسبتا جدید است که در آن بازیکنان با استفاده از سرنخ ها، استراتژی ها و ...
									</p>
									<Link className="btn-read-more float-left ml-4" to="/blog-details"><span>ادامه مطلب<i className="la la-arrow-left" /></span></Link>
									<p className="date float-right">۶ مهر ۱۴۰۱</p>
								</div>
							</div>
						</div>

						<div className="col-lg-12  text-md-center text-left">
		            <div className="tp-pagination my-4 text-md-center text-left d-inline-block mt-4">
		              <ul>
		                <li><a className="prev page-numbers" href="#"><i className="la la-long-arrow-left" /></a></li>
		                <li><span className="page-numbers">1</span></li>
		                <li><span className="page-numbers current">2</span></li>
		                <li><a className="page-numbers" href="#">3</a></li>
		                <li><a className="page-numbers" href="#">4</a></li>
		                <li><a className="next page-numbers" href="#"><i className="la la-long-arrow-right" /></a></li>
		              </ul>                          
		            </div>
		          </div>
					</div>
				</div>
			</div>

		)
	}
}

export default BlogV2;
