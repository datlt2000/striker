import axios from "axios";
import React, { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "../css/user-home.css";
import { initialization } from "../confic/const";
import { connect } from "react-redux";
import * as actions from "../action/actions";
function Tag(props) {
	return (
		<button className="border-bottom-0 border-secondary w-25 bg-light" onClick={() => props.click(props.id)}>
			<span className="text-center" style={{ fontSize: "20px", color: "#1e82b4" }}>{props.title}</span>
		</button>
	);
}

function Account(props) {
	const addData = (infor) => {
		const token = localStorage.token;
		axios({
			method: "POST",
			url: `/striker/api/infor/update-infor`,
			data: infor,
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then(res => {
				if (res.data) {
					props.getData();
					alert("success");
				}
				else alert("cannot update");
			}).catch(error => {
				alert("Can not connect to server");
			});
	};
	const accountSetting = [
		{
			name: "firstName",
			type: "text"
		},
		{
			name: "lastName",
			type: "text"
		},
		{
			name: "birthDay",
			type: "date"
		},
		{
			name: "sex",
			type: "select",
			options: ["male", "female"]
		}
	];
	return (
		<InputGroup inputs={accountSetting} value={props.infor} addData={addData} show={props.getData} />
	);
}
function School(props) {
	const addData = (school) => {
		const token = localStorage.token;
		axios({
			method: "POST",
			url: `/striker/api/infor/update-school`,
			data: school,
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then(res => {
				if (res.data) {
					props.getData();
					alert("success");
				}
				else alert("can update");
			}).catch(error => {
				alert("Can not connect to server");
			});
	};
	const schoolSetting = [
		{
			name: "school",
			type: "text"
		},
		{
			name: "address",
			type: "text"
		},
	];
	return (
		<InputGroup inputs={schoolSetting} value={props.school} addData={addData} show={props.getData} />
	);
}
function Password(props) {
	const addData = (pass) => {
		if (pass.password !== pass.confirm) {
			return false;
		}
		const token = localStorage.token;
		axios({
			method: "POST",
			url: `/striker/api/infor/update-password`,
			data: { password: pass.password },
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then(res => {
				if (res.data) alert("success");
				else alert("cannot update");
			}).catch(error => {
				alert("Can not connect to server");
			});
	}
	const PasswordSetting = [
		{
			name: "password",
			type: "password"
		},
		{
			name: "confirm",
			type: "password"
		}
	];
	const defaultPass = {
		password: "",
		confirm: ""
	};
	return (
		<InputGroup inputs={PasswordSetting} value={defaultPass} addData={addData} show={props.getData} />
	);
}
function Homework(props) {
	return (
		<div>For Future</div>
	);
}
const mapStateToProps = (state) => {
	return {
		infor: state.account.infor,
		school: { school: state.account.infor.school, address: state.account.infor.address }
	};
}
const mapDispatchToProps = (dispatch) => ({
	setAccount: (infor) => {
		dispatch(actions.setUser(infor));
	}
})
function Profile(props) {
	const [tag, setTag] = useState(0);
	const getData = () => {
		const id = { id: props.infor.accountId };
		const token = localStorage.token;
		axios({
			method: "POST",
			url: `/striker/api/infor/get-infor`,
			data: id,
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then(res => {
				if (res.data) {
					props.setAccount(res.data);
				}
				else {
					props.setAccount(initialization);
				}
			}).catch(error => {
				alert("Can not connect to server");
			});
	};
	//list body of setting
	const settingAccount = [
		<Account getData={getData} infor={props.infor} />,
		<School getData={getData} school={props.school} />,
		<Password getData={getData} />,
		<Homework getData={getData} />,
	];
	//list item in header of setting
	const setting = [
		"Account",
		"School",
		"Password",
		"Homework"
	];
	/**
	 * change shown tag to tag that is in index of list
	 * @param {int} index index of list tag
	 */
	const changeTag = (index) => {
		setTag(index);
	};
	useEffect(getData, []);
	return (
		<div id="user-home" className="d-flex bg-user-home">
			<SideBar />
			<div className="main-content">
				<TopBar />
				<div style={{ height: "85%" }}>
					<div className="col-10 col-lg-8 h-100 ml-3" style={{ backgroundColor: "#ebecf0" }}>
						<h2>Account Setting</h2>
						<div className="mb-3">
							{setting.map((item, index) => {
								return <Tag title={item} id={index} click={changeTag} key={index} />;
							})}
						</div>
						<div className="d-flex justify-content-center">
							{
								settingAccount[tag]
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);