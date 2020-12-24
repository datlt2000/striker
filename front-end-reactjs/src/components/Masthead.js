import React from 'react';
import '../css/masthead.css';
import { Link } from 'react-router-dom';
class Masthead extends React.Component {
	render() {
		return (
			// masthead
			<header className="masthead text-white text-center" id="masthead">
				<div className="overlay"></div>
				<div className="container d-flex justify-content-center">
					<div className="row">
						{/* title and subtitle */}
						<div className="col-md-12 mx-auto title">
							<h1 className='text-center'>
								Striker
														</h1>
							<h2>
								Our Student Planner App get organized is proven to help you be at your best.
														</h2>
						</div>
						{/* get start button */}
						<div className="col-12 mx-auto">
							<form>
								<div className="form-row justify-content-center mt-3 mb-5">
									<div className="col-4">
										<Link to="/login"
											role="button"
											className="btn btn-block btn-lg btn-danger">
											Get Start!
																				</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default Masthead;