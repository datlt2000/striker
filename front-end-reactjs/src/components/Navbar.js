import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { Navbar, Nav } from "react-bootstrap";
class MyNavbar extends React.Component {
	componentDidMount() {
		var heightToShow = window.pageYOffset;
		window.onscroll = function () {
			var currentPage = window.pageYOffset;
			if (currentPage === 0) document.getElementById('mainNav').classList.remove('sticky');
			else {
				document.getElementById('mainNav').classList.add('sticky');
				if (currentPage > heightToShow) {
					document.getElementById('mainNav').style.display = 'none';
				}

				if (currentPage <= heightToShow) {
					document.getElementById('mainNav').style.display = 'block';
				}
			}
			heightToShow = currentPage;
		}
	}

	componentWillUnmount() {
		window.onscroll = null;
	}

	toggle = () => {
		document.getElementById('mainNav').classList.add('sticky');
	}

	render() {
		return (
			<Navbar className="fixed-top py-2" variant="dark" expand="lg" id="mainNav" onToggle={this.toggle}>
				<div className="container-fluid">
					<Navbar.Brand className="ml-5">
						<h1>Striker</h1>
					</Navbar.Brand>
					<Navbar.Toggle className="navbar-toggler-right"
						aria-controls="navbarResponsive">
					</Navbar.Toggle>
					<Navbar.Collapse id="navbarResponsive">
						<Nav className="ml-auto my-2 my-lg-0">
							<li className="nav-item mx-2">
								<a className="nav-link active"
									href="#masthead">Home</a>
							</li>
							<li className="nav-item mx-2">
								<a className="nav-link active"
									href="#icons">Services</a>
							</li>
							<li className="nav-item mx-2">
								<a className="nav-link active"
									href="#imgs">Mission</a>
							</li>
							<li className="nav-item mx-2">
								<a className="nav-link active"
									href="#about">About</a>
							</li>
						</Nav>
						{/* login button */}
						<div className="mx-1">
							<Link to="/login"
								role="button"
								className="btn btn-block btn-success px-3">
								Sign up
														</Link>
						</div>
						{/* register button */}
						<div className="mx-1">
							<Link to="/register"
								role="button"
								className="btn btn-block btn-primary px-2">
								Register
														</Link>
						</div>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}
export default MyNavbar;