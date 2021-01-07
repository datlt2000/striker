import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/side-bar.css";

function mapStateToProps(state) {
	return { id: state.account.infor.accountId };
}

class SideBar extends React.Component {
	constructor(props) {
		super();
		this.state = {
			sideBarShow: false
		};
	}

	show = () => {
		this.setState({ sideBarShow: !this.state.sideBarShow });
		if (this.state.sideBarShow) {
			document.getElementById("sidebarToggleIcon").classList.remove("fa-bars");
			document.getElementById("sidebarToggleIcon").classList.add("fa-times");
			document.getElementById("accordionSidebar").classList.add("sidebar-show");
			document.getElementById("logoTopbar").style.display = "none";
		}
		else {
			document.getElementById("sidebarToggleIcon").classList.remove("fa-times");
			document.getElementById("sidebarToggleIcon").classList.add("fa-bars");
			document.getElementById("accordionSidebar").classList.remove("sidebar-show");
			document.getElementById("logoTopbar").style.display = "inline-block";
		}
	}

	render() {
		return (
			<div>
				<nav className="bg-side-bar" id="sideBar">
					<ul id="accordionSidebar" className="sidebar-nav sidebar">

						{/*} Sidebar - Brand */}
						<Link className="sidebar-brand d-flex align-items-center justify-content-center"
							to="/">
							<div className="sidebar-brand-icon rotate-n-15">
								<i className="fas fa-laugh-wink"></i>
							</div>
							<div className="sidebar-brand-text mx-3">Striker</div>
						</Link>

						{/*} Divider */}
						<hr className="sidebar-divider my-0" />

						{/*} Nav Item - Home */}
						<li className="nav-item active">
							<Link className="nav-link"
								to="/home">
								<i className="fas link-icon fa-fw fa-home"></i>
								<span className="link-title">Home</span>
							</Link>
						</li>

						{/*} Nav Item - Calendar */}
						<li className="nav-item">
							<Link className="nav-link"
								to="/calendar">
								<i className="fas link-icon fa-fw fa-calendar-alt"></i>
								<span className="link-title">Calendar</span>
							</Link>
						</li>

						{/*} Nav Item - Homework */}
						<li className="nav-item">
							<Link className="nav-link"
								to="/homework">
								<i className="fas link-icon fa-fw fa-book-open"></i>
								<span className="link-title">Homework</span>
							</Link>
						</li>

						{/*} Nav Item - Admin */}
						{
							this.props.id !== 1 ? null :
								<li className="nav-item">
									<Link className="nav-link"
										to="/admin">
										<i className="fas link-icon fa-fw fa-chart-area"></i>
										<span className="link-title">Admin</span>
									</Link>
								</li>
						}
						{/*} Nav Item - Profile */}
						<li className="nav-item">
							<Link className="nav-link"
								to="/profile">
								<i className="fas link-icon fa-fw fa-cog"></i>
								<span className="link-title">Profile</span>
							</Link>
						</li>

						{/*} Nav Item - Feedback */}
						<li className="nav-item">
							<Link className="nav-link"
								to="/feedback">
								<i className="fas link-icon fa-fw fa-users"></i>
								<span className="link-title">Feedback</span>
							</Link>
						</li>

						{/*} Nav Item - Sign Out */}
						<li className="nav-item" onClick={() => { localStorage.removeItem("token") }}>
							<Link className="nav-link"
								to="/">
								<i className="fas link-icon fa-fw fa-sign-out-alt"></i>
								<span className="link-title">Sign Out</span>
							</Link>
						</li>
					</ul>
					<button id="sidebarToggleTop"
						onClick={this.show}
						className="btn btn-link d-md-none rounded-circle m-2 side-bar-button">
						<i className="fas fa-bars"
							id="sidebarToggleIcon"></i>
					</button>
				</nav>
			</div>
		);
	}
}

export default connect(mapStateToProps)(SideBar);