import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import AboutUs from './components/about';
import TourList from './components/tour-list';
import TourListV2 from './components/tour-list-v2';
import TourListV3 from './components/tour-list-v3';
import TourDetails from './components/tour-details';
import DestinationLIst from './components/destination-list';
import DestinationLIstV2 from './components/destination-list-v2';
import DestinationDetails from './components/destination-details';
import Gallery from './components/gallery';
import GalleryDetails from './components/gallery-details';
import Faq from './components/faq';
import Contact from './components/contact';
import Error from './components/error';
import CommingSoon from './components/comming-soon';
import UserProfile from './components/user-profile';
import Blog from './components/blog';
import BlogV2 from './components/blog-v2';
import BlogV3 from './components/blog-v3';
import BlogDetails from './components/blog-details';
import TheGame from './components/TheGame/TheGame';
import Reservation from './components/reservation/Reservation';
import { Provider } from 'react-redux';
import store from './store/store';
class Root extends Component {
	render() {
		return (
			<HashRouter basename="/">
				<Provider store={store}>
					<Switch>
						<Route exact path="/" component={HomeV3} />
						<Route path="/home-v2" component={HomeV2} />
						<Route path="/home-v3" component={HomeV3} />
						<Route path="/about" component={AboutUs} />
						<Route path="/tour-list" component={TourList} />
						<Route path="/tour-list-v2" component={TourListV2} />
						<Route path="/tour-list-v3" component={TourListV3} />
						<Route path="/tour-details" component={TourDetails} />
						<Route path="/destination-list" component={DestinationLIst} />
						<Route path="/destination-list-v2" component={DestinationLIstV2} />
						<Route path="/destination-details" component={DestinationDetails} />
						<Route path="/gallery" component={Gallery} />
						<Route path="/gallery-details" component={GalleryDetails} />
						<Route path="/faq" component={Faq} />
						<Route path="/contact" component={Contact} />
						<Route path="/error" component={Error} />
						<Route path="/comming-soon" component={CommingSoon} />
						<Route path="/user-profile" component={UserProfile} />
						<Route path="/blog" component={Blog} />
						<Route path="/blog-v2" component={BlogV2} />
						<Route path="/blog-v3" component={BlogV3} />
						<Route path="/blog-details" component={BlogDetails} />
						<Route path="/the-game/:gameName" component={TheGame} />
						<Route path="/reservation/:name" component={Reservation} />
					</Switch>
				</Provider>
			</HashRouter>

		)
	}
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('viaje'));
