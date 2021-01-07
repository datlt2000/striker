import React from "react";
import axios from "axios";
import "../css/login.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../action/actions";

/**
 * redux function that send state to dispatcher
 * this function will return props of component -> we can use that function
 * in return value as a property of props
 * @param {function} dispatch with @param{action} that will call action 
 * @return {props} of component
 */
const mapDispatchToProps = dispatch => ({
	setUser: (user) => {
		dispatch(actions.setUser(user))
	}
});

/**
 * login component
 */
class Login extends React.Component {
	constructor(props) {
		super();
		this.state = {
			userName: "",
			password: "",
			userMessage: "",
			passwordMessage: "",
			redirect: false
		}
	}

	userChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({ [name]: value });
		if (!value) {
			this.setState({ userMessage: "requied" });
		}
		else {
			this.setState({ userMessage: "" });
		}
	}

	passwordChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({ [name]: value });
		if (!value) {
			this.setState({ passwordMessage: "requied" });
		}
		else {
			this.setState({ passwordMessage: "" });
		}
	}

	submit = (event) => {
		event.preventDefault();
		if (!this.state.password) {
			this.setState({ passwordMessage: "requied" })
		}
		if (!this.state.userName) {
			this.setState({ userMessage: "requied" })
		}
		if (!this.state.passwordMessage && !this.state.userMessage) {
			const user = {
				username: this.state.userName,
				password: this.state.password
			};
			axios({
				method: "POST",
				url: `/striker/account/login`,
				data: user
			})
				.then(res => {
					if (res.data.token) {
						localStorage.setItem("token", res.data.token);
						this.setState({ redirect: true });
						this.props.setUser(res.data);
					}
					else {
						this.setState({ redirect: false });
						this.setState({ passwordMessage: "invalid user or password" });
					}
				})
				.catch(error => {
					this.setState({ redirect: false });
					this.setState({ passwordMessage: "invalid user or password" });
				});
		}
	}

	render() {

		//redirect if successfull login
		if (this.state.redirect) {
			return (<Redirect to="/home"></Redirect>);
		}

		// login page
		return (
			<div className="container-fluid" id="login">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 col-xl-9 mx-auto">
							<div className="card card-signin flex-row my-5 align-items-center">
								<div className="card-img-left d-none d-md-flex">
									{/* Background image for card set in CSS! */}
								</div>
								<div className="card-body">
									<h5 className="card-title text-center">Welcome back!</h5>
									<form className="form-signin" onSubmit={this.submit}>
										{/* user name input */}
										<div className="form-label-group">
											<input type="text"
												id="userName"
												className="form-control"
												placeholder="User Name"
												autoFocus
												name="userName"
												onBlur={this.userChange} />
											<span className="overlay"></span>
											{/* error */}
											<small className="error">{this.state.userMessage}</small>
										</div>
										{/* password input */}
										<div className="form-label-group">
											<input type="password"
												id="password"
												className="form-control"
												placeholder="Password"
												name="password"
												onBlur={this.passwordChange} />
											<span className="overlay"></span>
											{/* error */}
											<small className="error">{this.state.passwordMessage}</small>
										</div>
										{/* remember checkbox */}
										<div className="custom-control custom-checkbox mb-3">
											<input type="checkbox"
												className="custom-control-input"
												name="remember" id="remember" />
											<label htmlFor="remember"
												className="custom-control-label">Remember Password
                                                </label>
										</div>
										{/* submit button */}
										<button className="btn btn-lg btn-primary btn-block text-uppercase"
											type="submit">Log In</button>
										<Link to="/register"
											className="btn btn-lg btn-success btn-block text-uppercase"
											href="#register">Register</Link>
										<div className="text-center m-3">
											<Link className="small"
												to="/forgot-password">Forgot password?</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

//connect component to redux and export
export default connect(null, mapDispatchToProps)(Login);