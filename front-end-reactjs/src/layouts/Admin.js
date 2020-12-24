import React, { useEffect, useState } from "react";
import * as actions from "../action/adminAction";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { connect } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";

function Tag(props) {
  return (
    <button className="w-25 border-0 border-right-overide" onClick={() => props.click(props.id)}>
      <h1 className="h3 text-gray-800">{props.title}</h1>
    </button>
  );
};
const mapStateToProps = (state) => {
  return {
    feedbacks: state.admin.feedbacks,
    statistic: {
      shortSchedulerUpcoming: 30,
      longSchedulerUpcoming: 30,
      complete: 30,
      late: 5,
      other: 5,
      login: 30,
      register: 5,
      newShortScheduler: 10,
      newLongScheduler: 5
    }
  };
}
const mapDispatchToState = (dispatch) => ({
  deleteUser: (id) => {
    dispatch(actions.deleteUser(id))
  },
  getFeedbacks: () => {
    dispatch(actions.getListFeedbacks())
  },
  getStatistic: () => {
    dispatch(actions.getStatistic())
  }
});
function Dashboard(props) {
  return (<div className="container-fluid bg-light rounded pb-4">
    {/* Content row */}
    <div className="row">
      {/* Amount of people who login */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Login</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.statistic.login}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amount of people who register */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Register</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.statistic.register}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amount of Long Scheduler which created */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">New Long Scheduler</div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.statistic.newLongScheduler}</div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amount of Short Scheduler which created */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">New Short Scheduler</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.statistic.newShortScheduler}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Content Row */}
    <div className="row">
      {/* Content Column */}
      <div className="col-xl-7 col-lg-6 mb-4">
        {/* Project Card Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Status</h6>
          </div>
          <div className="card-body">
            <h4 className="small font-weight-bold">Complete<span className="float-right">{props.statistic.complete + '%'}</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: props.statistic.complete + '%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Long Scheduler Upcoming<span className="float-right">{props.statistic.longSchedulerUpcoming + '%'}</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: props.statistic.longSchedulerUpcoming + '%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Short Scheduler Upcoming<span className="float-right">{props.statistic.shortSchedulerUpcoming + '%'}</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: props.statistic.shortSchedulerUpcoming + '%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Other<span className="float-right">{props.statistic.other + '%'}</span></h4>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: props.statistic.other + '%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Late<span className="float-right">{props.statistic.late + '%'}</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: props.statistic.late + '%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="col-xl-4 col-lg-6">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Chart</h6>
          </div>
          {/* Card Body */}
          <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
              <PieChart data={[
                { title: "Short Sheduler Upcoming", color: "#4e73df", value: props.statistic.shortSchedulerUpcoming },
                { title: "Long Sheduler Upcoming", color: "#36b9cc", value: props.statistic.longSchedulerUpcoming },
                { title: "Complete", color: "#1cc88a", value: props.statistic.complete },
                { title: "Late", color: "#e74a3b", value: props.statistic.late },
                { title: "Other", color: "#f6c23e", value: props.statistic.other }
              ]} label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                labelStyle={{ fontSize: "7px" }} />
            </div>
            <div className="mt-4 text-center small text-gray-600">
              <div>
                <i className="fas fa-circle text-primary m-1"></i><span>Short Scheduler Upcoming</span>
              </div>
              <div>
                <i className="fas fa-circle text-info m-1"></i><span>Long Scheduler Upcoming</span>
              </div>
              <div>
                <i className="fas fa-circle text-success m-1"></i><span>Complete</span>
              </div>
              <div>
                <i className="fas fa-circle text-danger m-1"></i><span>Late</span>
                <i className="fas fa-circle text-warning m-1"></i><span>Other</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
function Feedback(props) {
  return (
    <div className="row mx-4">
      <table border="2" width="100%" valign="center" bordercolor="#007bff">
        <thead>
          <tr height="50px" bgcolor="#007bff"><td colSpan="4"
            style={{ textAlign: "center", color: "white", fontSize: "24px", fontWeight: "700" }}>
            DANH SÁCH PHẢN HỒI</td></tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }} height="45px">
            <th width="5%">Stt</th>
            <th width="10%">Account Id</th>
            <th width="20%">Email</th>
            <th width="60%">Feedback</th>
          </tr>
          {props.feedbacks.map((feedback, index) => {
            return (
              <tr height="40px" key={feedback.id}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{feedback.id}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-group mt-2">
        <span className="btn btn-primary border">1</span>
        <span className="btn btn-default border">2</span>
        <span className="btn btn-default border">..</span>
      </div>
    </div>
  );
};
function UserManage(props) {
  return (
    <div className="row">
      {/* Topbar Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light small" placeholder="Search user..."
            aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
function Admin(props) {
  const [tag, setTag] = useState(0);
  //list body of setting
  const settingAccount = [
    <Dashboard statistic={props.statistic} />,
    <Feedback feedbacks={props.feedbacks} />,
    <UserManage />
  ];
  //list item in header of setting
  const setting = [
    "Dashboard",
    "Feedback",
    "User"
  ];
  /**
   * change shown tag to tag that is in index of list
   * @param {int} index index of list tag
   */
  const changeTag = (index) => {
    setTag(index);
  };
  const getData = () => {
    props.getFeedbacks();
    props.getStatistic();
  }
  useEffect(getData, []);
  return (
    <div className="d-flex bg-user-home">
      <SideBar />
      <div className="main-content">
        <TopBar />
        <div className="container-fluid bg-light rounded py-4">
          <div className="d-sm-flex align-items-center justify-content-start mb-4 pt-3">
            {setting.map((item, index) => {
              return <Tag title={item} id={index} click={changeTag} key={index} />;
            })}
          </div>
          <div>
            {
              settingAccount[tag]
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToState)(Admin);