import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="main-banner-area jarallax" style={{backgroundImage: 'url('+publicUrl+'assets/img/banner/Door1.png)'}}>
			  
			</div>
        }
}

export default BannerV2