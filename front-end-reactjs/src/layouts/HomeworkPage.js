import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import MyCard from "../components/MyCard";
import "../css/user-home.css";
import {
  defaultLongScheduler,
  defaultShortScheduler,
  inputLongScheduler
} from "../confic/const";
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
  getLongScheduler: () => {
    dispatch(actions.getLongScheduler());
  },
  addLongScheduler: (longScheduler) => {
    dispatch(actions.addLongScheduler(longScheduler));
  },
  deleteLongScheduler: (id) => {
    dispatch(actions.deleteLongScheduler(id));
  }
});
const mapStateToProps = state => {
  return {
    upcoming: state.account.longSchedulers.upcoming,
    over: state.account.longSchedulers.over
  }
};
function HomeworkPage(props) {
  useEffect(props.getLongScheduler, []);
  return (
    <div id="home-work-page" className="d-flex bg-user-home">
      <SideBar />
      <div className="main-content" style={{ height: "100vh" }}>
        <TopBar />
        <div className="d-flex row">
          <div className="col-11 mt-0 col-xl-4 col-lg-5 h-100">
            {/* list of Homework that are not completed */}
            <MyCard title="Upcoming" data={props.upcoming} input={inputLongScheduler} delete={props.deleteLongScheduler}
              addData={props.addLongScheduler} defaultValue={defaultShortScheduler} />
          </div>
          <div className="col-11 mt-0 col-xl-4 col-lg-5 h-100">
            {/* list of homework that over */}
            <MyCard title="Late" data={props.over} input={inputLongScheduler} delete={props.deleteLongScheduler}
              addData={props.addLongScheduler} defaultValue={defaultLongScheduler} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeworkPage);