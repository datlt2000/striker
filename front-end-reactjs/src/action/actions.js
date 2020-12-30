import axios from "axios";
import { itemsLongScheduler, itemsShortScheduler } from "../confic/const";
/**
 * action is class which have 2 property, tell reducer how to process state
 *  type:       reducer will check type to specify action
 *  payload:    state which want to share to other component
 */

/**
 * save state to store and other component can get this state
 * @param {Object} user
 * @returns object action
 */
export function setUser(account) {
	return {
		type: "SET_ACCOUNT",
		payload: account
	};
};
export function setLongSchedulerUpcoming(longScheduler) {
	return {
		type: "SET_LONGSCHEDULER_UPCOMING",
		payload: longScheduler
	}
};
export function setShortSchedulerUpcoming(shortScheduler) {
	return {
		type: "SET_SHORTSCHEDULER_UPCOMING",
		payload: shortScheduler
	}
};
export function setLongSchedulerOver(shortScheduler) {
	return {
		type: "SET_LONGSCHEDULER_OVER",
		payload: shortScheduler
	}
};
export function setShortSchedulerOver(shortScheduler) {
	return {
		type: "SET_SHORTSCHEDULER_OVER",
		payload: shortScheduler
	}
};
export const addLongScheduler = (longScheduler) => {
	return dispatch => {
		if (longScheduler.endTime < longScheduler.startTime) {
			alert("end time bigger than end time");
			return false;
		}
		if (longScheduler.id) {
			axios.post(`/striker/api/long-scheduler/update`, longScheduler)
				.then(res => {
					dispatch(getLongScheduler());
				}).catch(error => {
					alert("Can not connect to server");
				});
		}
		else {
			axios.post(`/striker/api/long-scheduler/insert`, longScheduler)
				.then(res => {
					dispatch(getLongScheduler());
				}).catch(error => {
					alert("Can not connect to server");
				});
		}
	}
};
export const addShortScheduler = (shortScheduler) => {
	return dispatch => {
		var date = new Date();
		if (shortScheduler.startTime.length < 10) {
			shortScheduler.startTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ' ' + shortScheduler.startTime + ":00";
		}
		if (shortScheduler.endTime.length < 10) {
			shortScheduler.endTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ' ' + shortScheduler.endTime + ":00";
		}
		if (shortScheduler.endTime < shortScheduler.startTime) {
			alert("start time bigger than end time");
			return false;
		}
		if (shortScheduler.id) {
			axios.post(`/striker/api/short-scheduler/update`, shortScheduler)
				.then(res => {
					dispatch(getShortScheduler());
				}).catch(error => {
					alert("Can not connect to server");
				});
		}
		else {
			axios.post(`/striker/api/short-scheduler/insert`, shortScheduler)
				.then(res => {
					dispatch(getShortScheduler());
				}).catch(error => {
					alert("Can not connect to server");
				});
		}
	}
};
export const deleteLongScheduler = (props) => {
	return dispatch => {
		const id = { id: props };
		return axios.post(`/striker/api/long-scheduler/delete`, id)
			.then(res => {
				dispatch(getLongScheduler());
			}).catch(error => {
				alert("Can not connect to server");
			});
	}
};
export const deleteShortScheduler = (props) => {
	return dispatch => {
		const id = { id: props };
		return axios.post(`/striker/api/short-scheduler/delete`, id)
			.then(res => {
				dispatch(getShortScheduler());
			}).catch(error => {
				alert("Can not connect to server");
			});
	}
};
export const getShortScheduler = () => {
	return dispatch => {
		axios.post(`/striker/api/short-scheduler/get-upcoming`)
			.then(res => {
				if (res.data) {
					dispatch(setShortSchedulerUpcoming(res.data));
				}
				else {
					dispatch(setShortSchedulerUpcoming(itemsShortScheduler.upcoming));
				}
			}).catch(error => {
				alert("Can not connect to server");
			});
		axios.post(`/striker/api/short-scheduler/get-over`)
			.then(res => {
				if (res.data) {
					dispatch(setShortSchedulerOver(res.data));
				}
				else {
					dispatch(setShortSchedulerOver(itemsShortScheduler.over));
				}
			}).catch(error => {
				alert("Can not connect to server");
			});
	}
};
export const getLongScheduler = () => {
	return dispatch => {
		axios.post(`/striker/api/long-scheduler/get-upcoming`)
			.then(res => {
				if (res.data) {
					dispatch(setLongSchedulerUpcoming(res.data));
				}
				else {
					dispatch(setLongSchedulerUpcoming(itemsLongScheduler.upcoming));
				}
			}).catch(error => {
				alert("Can not connect to server");
			});
		axios.post(`/striker/api/long-scheduler/get-over`)
			.then(res => {
				if (res.data) {
					dispatch(setLongSchedulerOver(res.data));
				}
				else {
					dispatch(setLongSchedulerOver(itemsLongScheduler.over));
				}
			}).catch(error => {
				alert("Can not connect to server");
			});
	}
};
export const getScheduler = () => {
	return dispatch => {
		dispatch(getShortScheduler());
		dispatch(getLongScheduler());
	}
}