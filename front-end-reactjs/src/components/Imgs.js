import React from 'react';
import '../css/imgs.css';
import background_1 from '../img/bg-showcase-1.jpg';
import background_2 from '../img/bg-showcase-2.jpg';
import background_3 from '../img/bg-showcase-3.jpg';

/**
 * component have img in the right and decription in the left
 * @param {object} props 
 * key {int} id of content. Contents that have same id just have one shown
 * img {Link} image in the right
 * title {string} title of decription
 * subtitle {string} dicription
 */
function ImgRight(props) {
	return (
		<div className="row no-gutters">
			<div className="col-lg-6 order-lg-2 text-white showcase-img"
				style={{ backgroundImage: `url(${props.img})` }}></div>
			<div className="col-lg-6 order-lg-1 my-auto showcase-text">
				<h2>{props.title}</h2>
				<p className="lead mb-0">{props.subtitle}</p>
			</div>
		</div>
	);
}

/**
 * component have img in the left and decription in the right
 * @param {object} props 
 * key {int} id of content. Contents that have same id just have one shown
 * img {Link} image in the left
 * title {string} title of decription
 * subtitle {string} dicription
 */
function ImgLeft(props) {
	return (
		<div className="row no-gutters">
			<div className="col-lg-6 order-lg-2 my-auto showcase-text">
				<h2>{props.title}</h2>
				<p className="lead mb-0">{props.subtitle}</p>
			</div>
			<div className="col-lg-6 order-lg-1 text-white showcase-img"
				style={{ backgroundImage: `url(${props.img})` }}></div>
		</div>
	);
}
export default function Imgs(props) {
	const infors = [
		{
			id: 1,
			title: "Fully Responsive Design",
			subtitle: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device," +
				"whether it's a phone, tablet, or desktop the page will behave responsively!",
			img: background_1
		},
		{
			id: 2,
			title: "Cross platform",
			subtitle: "Newly improved, and full of great utility classes," +
				"Bootstrap 4 is leading the way in mobile responsive web development!" +
				"All of the themes on Start Bootstrap are now using Bootstrap 4!",
			img: background_2
		},
		{
			id: 3,
			title: "Easy to use",
			subtitle: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand" +
				"some deeper customization options. Out of the box, just add your content and images," +
				"and your new landing page will be ready to go!",
			img: background_3
		},
	];
	return (
		<div className="showcase" id="imgs">
			<div className="container-fluid p-0">
				{infors.map(img => {
					if (img.id % 2 === 0)
						return (<ImgLeft title={img.title} subtitle={img.subtitle} img={img.img} key={img.id} />);
					else return (<ImgRight title={img.title} subtitle={img.subtitle} img={img.img} key={img.id} />);
				})}
			</div>
		</div>
	);
}