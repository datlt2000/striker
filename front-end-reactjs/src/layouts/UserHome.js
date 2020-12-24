import React, { useEffect } from "react";
import { connect } from "react-redux";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import MyCard from "../components/MyCard";
import "../css/user-home.css";
import * as actions from "../action/actions";
import {
	inputShortScheduler,
	inputLongScheduler,
	defaultShortScheduler,
	defaultLongScheduler
} from "../confic/const";
/**
 * redux function that send state to dispatcher
 * this function will return props of component -> we can use that function
 * in return value as a property of props
 * @param {function} dispatch with @param{action} that will call action 
 * @return {props} of component
 */
const mapDispatchToProps = dispatch => ({
	getScheduler: () => dispatch(actions.getScheduler()),
	addLongScheduler: (longScheduler) => dispatch(actions.addLongScheduler(longScheduler)),
	addShortScheduler: (shortScheduler) => dispatch(actions.addShortScheduler(shortScheduler)),
	deleteLongScheduler: (id) => dispatch(actions.deleteLongScheduler(id)),
	deleteShortScheduler: (id) => dispatch(actions.deleteShortScheduler(id))
});

const mapStateToProps = state => {
	return {
		shortScheduler: state.account.shortSchedulers.upcoming,
		longScheduler: state.account.longSchedulers.upcoming
	}
};

function UserHome(props) {
	useEffect(props.getScheduler, []);
	return (
		<div id="user-home" className="d-flex bg-user-home">
			<SideBar />
			<div className="main-content">
				<TopBar />
				<div className="d-flex justify-content-start row">
					<div className="col-11 mt-0 col-xl-4 col-lg-5 h-100">
						{/* list of upcoming event */}
						<MyCard title="Short Scheduler" data={props.shortScheduler} delete={props.deleteShortScheduler}
							input={inputShortScheduler} addData={props.addShortScheduler} defaultValue={defaultShortScheduler} />
					</div>
					<div className="col-11 mt-0 col-xl-4 col-lg-5 h-100">
						{/* list of event that are happend */}
						<MyCard title="Long Scheduler" data={props.longScheduler} delete={props.deleteLongScheduler}
							input={inputLongScheduler} addData={props.addLongScheduler} defaultValue={defaultLongScheduler} />
					</div>
				</div>
			</div>
		</div>
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserHome);