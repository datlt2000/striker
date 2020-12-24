import React from 'react';
import '../css/about.css';
import authur_1 from '../img/a.jpg';
import authur_2 from '../img/testimonials-1.jpg';
import authur_3 from '../img/testimonials-2.jpg';
import authur_4 from '../img/testimonials-3.jpg';

/**
 * component that have information of authur
 * @param {object} props
 * img {link} link to avatar
 * name {string}
 * slogan {string}
 */
function Authur(props) {
	return (
		<div className="testimonial-item mx-auto mb-5 mb-lg-0">
			<img className="img-fluid rounded-circle mb-3"
				src={props.img}
				alt="" />
			<h5>{props.name}</h5>
			<p className="font-weight-light mb-0">
				{props.slogan}
			</p>
		</div>
	);
}

export default function About(props) {
	const authurs = [
		{
			name: "Dat",
			img: authur_1,
			slogan: "hi! I'm one"
		},
		{
			name: "Loc",
			img: authur_2,
			slogan: "hi! I'm two"
		},
		{
			name: "quyen",
			img: authur_3,
			slogan: "hi! I'm three"
		},
		{
			name: "Huy",
			img: authur_4,
			slogan: "hi! I'm 4"
		}
	];

	return (
		<div className="testimonials text-center bg-white" id="about">
			<div className="container">
				<h2 className="mb-5">ABOUT US</h2>
				<div className="row">
					{authurs.map(authur => {
						return (
							<div className="col-lg-3" key={authur.img}>
								<Authur name={authur.name} img={authur.img} slogan={authur.slogan} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}