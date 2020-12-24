import React from "react";
import "../css/topbar.css";
import { Dropdown } from "react-bootstrap";
import myimg from "../img/a.jpg";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		firstName: state.account.infor.firstName,
		notify: ["notify-1", "notify-2"],
	}
}

function TopBar(props) {
	return (
		<nav className="navbar navbar-expand navbar-light topbar mb-3 shadow">
			{/*Logo Page*/}
			<h3 className="d-md-none mx-auto font-weight-bold" id="logoTopbar">Striker</h3>

			{/* Topbar items */}
			<ul className="ml-auto navbar-nav">
				{/*notify topbar*/}
				<Dropdown className="nav-item no-arrow">
					{/* notify icon */}
					<Dropdown.Toggle
						className="nav-link mt-2"
						id="notifyDropdown"
						variant="none"
						href="#">
						<i className="fas fa-bell fa-fw"></i>
						{/* notify counter */}
						<span className="badge badge-danger badge-counter">
							{props.notify.length}+
							</span>
					</Dropdown.Toggle>
					{/* notify dropdown */}
					<Dropdown.Menu className="dropdown-list shadow animated--grow-in">
						<h3 className="dropdown-header">Thông báo</h3>
						{props.notify.map((t) => {
							return <span key={t} className="dropdown-item">{t}</span>
						})}
					</Dropdown.Menu>
				</Dropdown>

				{/* Nav Item - User Information */}
				<Dropdown className="nav-item no-arrow px-2 border-left border-primary">
					<Dropdown.Toggle
						variant="none"
						className="nav-link"
						href="#"
						id="userDropdown">
						<span className="d-none d-lg-inline-block text-gray-600 text-truncate userName">{props.firstName}</span>
						<img className="img-profile rounded-circle" src={myimg} alt="" />
					</Dropdown.Toggle>
					{/* Dropdown - User Information */}
					<Dropdown.Menu className="shadow animated--grow-in">
						<Dropdown.Item href="#">
							<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
									Profile
							</Dropdown.Item>
						<Dropdown.Item href="#">
							<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
									Settings
							</Dropdown.Item>
						<Dropdown.Item href="#">
							<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
									Activity Log
							</Dropdown.Item>
						<Dropdown.Item href="#">
							<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
									Logout
							</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</ul>
		</nav>
	)
}
export default connect(mapStateToProps)(TopBar);