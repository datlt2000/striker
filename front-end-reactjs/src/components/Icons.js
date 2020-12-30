import React from 'react';
import "../css/icons.css";

/**
 * component that have icon and decription in bottom
 * @param {object} props
 * icon {string} class font awesome
 * title {string}
 * subtitle {string}
 */
function Icon(props) {
	return (
		<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
			<div className="features-icons-icon m-auto text-primary">
				<i className={props.icon}></i>
			</div>
			<h3>{props.title}</h3>
			<p className="lead mb-0">{props.subtitle}</p>
		</div>
	);
}
export default function Icons(props) {
	const icons = [
		{
			title: "Fully Responsive",
			subtitle: "Manage your work efficiently and scientifically!",
			icon: "icon-screen-desktop"
		},
		{
			title: "Cross-Platform",
			subtitle: "Built on many platforms",
			icon: "icon-layers"
		},
		{
			title: "Easy to Use",
			subtitle: "Ready to use with your own job!",
			icon: "icon-check"
		}
	];
	return (
		<div className="features-icons bg-light text-center" id="icons">
			<div className="container">
				<div className="row">
					{icons.map(icon => {
						return (
							<div className="col-lg-4" key={icon.icon}>
								<Icon title={icon.title} subtitle={icon.subtitle} icon={icon.icon} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
}