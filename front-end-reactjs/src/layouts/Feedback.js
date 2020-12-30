import Axios from "axios";
import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
export default function Feedback(props) {
	const submit = (e) => {
		e.preventDefault();
		var feed = document.querySelector("#feedback").value;
		var f = {
			feedback: feed
		}
		Axios.post(`/striker/api/infor/feedback`, f)
			.then(res => {
				if (res.data) {
					alert("susscess");
					document.querySelector("#feedback").value = "";
				}
			}).catch(err => {
				alert("cannot connect server");
			})
	};
	return (
		<div className="d-flex bg-user-home">
			<SideBar />
			<div className="main-content">
				<TopBar />
				<div className="container justify-content-center">
					<div className="col-xl-9 mx-auto">
						<h2 className="my-4 text-center">How do you feel about us?</h2>
					</div>
					<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
						<form onSubmit={submit}>
							<div className="form-row justify-content-center">
								<div className="col-12 mb-4">
									<textarea id="feedback" className="form-control form-control-lg" style={{ height: "200px" }}
										name="feedback" placeholder="How do you feel?" />
								</div>
								<div className="col-12 col-md-3">
									<button type="submit" className="btn btn-block btn-lg btn-primary">Submit!</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};