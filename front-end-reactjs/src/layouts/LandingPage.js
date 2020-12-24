import React from 'react';
import About from '../components/About';
import Icons from '../components/Icons';
import Imgs from '../components/Imgs';
import MyNavbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import Footer from '../components/Footer';
import '../css/landingpage.css';

//LandingPage page
class LandingPage extends React.Component {
	render() {
		return (
			<div id="LandingPage">
				<MyNavbar />
				<Masthead />
				<Icons />
				<Imgs />
				<About />
				<Footer />
			</div>
		);
	}
}
export default LandingPage;