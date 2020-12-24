import axios from "axios";
import { generation } from "../confic/const";
function setListFeedbacks(props) {
  return {
    type: "SET_FEEDBACKS",
    payload: props
  }
}
function setStatistic(props) {
  return {
    type: "SET_STATISTIC",
    payload: props
  }
}
export function deleteUser(id) {
  return dispatch => {
    return axios.post(`/striker/api/admin/delete-user`, id)
      .then(res => {
        dispatch(getListFeedbacks());
      }).catch(err => {
        alert("can not connect server");
      })
  }
}
export function getListFeedbacks() {
  return (dispatch) => {
    return axios.post(`/striker/api/admin/get-feedback`)
      .then(res => {
        if (res.data) {
          dispatch(setListFeedbacks(res.data));
        }
        else {
          dispatch(setListFeedbacks(generation.users));
        }
      }).catch(err => {
        alert("can not connect server");
      })
  }
}
export function getStatistic() {
  return (dispatch) => {
    return axios.post(`/striker/api/admin/get-statistic`)
      .then(res => {
        if (res.data) {
          dispatch(setStatistic(res.data));
        }
        else {
          dispatch(setStatistic(generation.statistic));
        }
      }).catch(err => {
        alert("can not connect server");
      })
  }
}