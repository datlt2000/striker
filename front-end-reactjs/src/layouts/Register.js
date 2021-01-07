import React from 'react';
import '../css/register.css';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from "../action/actions";
import { accountRegister } from "../confic/const";

/**
 * redux function that send state to dispatcher
 * this function will return props of component -> we can use that function
 * in return value as a property of props
 * @param {function} dispatch with @param{action} that will call action 
 * @return {props} of component
 */
const mapDispatchToProps = dispatch => ({
	login: (user) => {
		dispatch(actions.login(user));
	}
});

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			firstNameMessage: "",
			lastNameMessage: "",
			password: "",
			email: '',
			emailMessage: "",
			passwordMessage: "",
			confirmPasswordMessage: "",
			redirect: false
		}
	}
	firstNameChange = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		if (!value) {
			this.setState({ firstNameMessage: "requied" });
		}
		else {
			this.setState({
				firstNameMessage: "",
				[name]: value
			});
		}
	}
	lastNameChange = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		if (!value) {
			this.setState({ lastNameMessage: "requied" });
		}
		else {
			this.setState({
				lastNameMessage: "",
				[name]: value
			});
		}
	}
	emailChange = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		if (!value) {
			this.setState({ emailMessage: "requied" });
		}
		else {
			this.setState({
				emailMessage: "",
				[name]: value
			});
		}
	}
	passwordChange = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		if (!value) {
			this.setState({ passwordMessage: "requied" });
		}
		else {
			this.setState({
				passwordMessage: "",
				[name]: value
			});
		}
	}
	confirmPasswordChange = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		if (!value) {
			this.setState({ confirmPasswordMessage: "requied" });
		}
		else if (value !== this.state.password) {
			this.setState({ confirmPasswordMessage: 'confirm password invalid' })
		}
		else {
			this.setState({
				confirmPasswordMessage: "",
				[name]: value
			});
		}
	}
	submit = event => {
		event.preventDefault();
		if (!this.state.user) {
			this.setState({ userMessage: "requied" });
		}
		if (!this.state.password) {
			this.setState({ passwordMessage: "requied" });
		}
		if (!this.state.confirmPasswordMessage) {
			this.setState({ confirmPasswordMessage: "requied" });
		}
		if (!this.state.email) {
			this.setState({ emailMessage: "requied" });
		}
		if (!this.state.confirmPasswordMessage && !this.state.emailMessage && !this.state.userMessage && !this.state.passwordMessage) {
			const userInfo = accountRegister;
			userInfo.password = this.state.password;
			userInfo.email = this.state.email;
			userInfo.firstName = this.state.firstName;
			userInfo.lastName = this.state.lastName;
			axios.post(`/striker/account/register`, userInfo)
				.then(res => {
					if (res.data) {
						this.props.login(userInfo);
						this.setState({redirect: true});
					}
					else {
						this.setState({ emailMessage: "email is existed" });
					}
				}).catch(error => {
					alert("Can not connect to server");
					this.setState({ redirect: false });
				});
		}
	}
	render() {

		// redirect home if seccessfull register
		if (this.state.redirect) {
			return (<Redirect to="/profile"></Redirect>)
		}

		// register page
		return (
			<div className="bg-gradient-primary">
				<div className="container">
					{/* register container */}
					<div className="card my-5 card-register">
						<div className="row">
							{/* register image in the left container*/}
							<div className="d-none d-md-flex col-md-5 col-lg-6 bg-image"></div>
							{/* register form */}
							<div className="col-md-7 col-lg-6">
								<div className="login d-flex align-items-center">
									<div className="col-10 mx-auto">
										{/* title */}
										<h3 className="login-heading mb-4">Register!</h3>
										<form onSubmit={this.submit} className="formRegister">
											{/* email */}
											<div className="form-label-group">
												<input type="email"
													id="email"
													className="form-control"
													placeholder="Email address"
													name="email"
													onBlur={this.emailChange} />
												<span className='overlay'></span>
												{/* error */}
												<span className='error'> {this.state.emailMessage}</span>
											</div>
											<div className="form-label-group row">
												<div className="col-6 py-0">
													<input type="text"
														id="firstName"
														className="form-control p-2"
														placeholder="First Name"
														name="firstName"
														onBlur={this.firstNameChange} />
													<span className='overlay'></span>
													<span className='error'> {this.state.firstNameMessage}</span>
												</div>
												<div className="col-6 py-0">
													<input type="text"
														id="lastName"
														className="form-control p-2"
														placeholder="Last Name"
														name="lastName"
														onBlur={this.lastNameChange} />
													<span className='overlay'></span>
													{/* error */}
													<span className='error'> {this.state.lastNameMessage}</span>
												</div>
											</div>
											<hr />
											{/* password */}
											<div className="form-label-group">
												<input type="password"
													id="password"
													className="form-control"
													placeholder="Password"
													name="password"
													autoComplete="false"
													onBlur={this.passwordChange} />
												<span className='overlay'></span>
												{/* error */}
												<span className='error'> {this.state.passwordMessage}</span>
											</div>
											{/* comfirm password */}
											<div className="form-label-group">
												<input type="password"
													id="confirmPassword"
													className="form-control"
													placeholder="Comfirm Password"
													name="confirmPassword"
													onBlur={this.confirmPasswordChange} />
												<span className='overlay'></span>
												{/* error */}
												<span className='error'> {this.state.confirmPasswordMessage}</span>
											</div>
											<hr />
											{/* submit button */}
											<button className="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2"
												type="submit">REGISTER
																						</button>
											<Link to='/login'
												className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
												role="button">LOG IN
																						</Link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(null, mapDispatchToProps)(Register);