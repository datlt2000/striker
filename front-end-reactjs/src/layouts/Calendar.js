import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import {
	Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda,
	ViewsDirective, ViewDirective, RecurrenceEditorComponent
} from "@syncfusion/ej2-react-schedule";
import { L10n } from '@syncfusion/ej2-base';
import { connect } from "react-redux";
import * as actions from "../action/actions";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
L10n.load({
	'en-US': {
		'schedule': {
			'saveButton': 'Save',
			'cancelButton': 'Cancel',
			'deleteButton': 'Delete',
			'newEvent': 'Add Event',
		},
	}
});
/**
 * redux function that send state to dispatcher
 * this function will return props of component -> we can use that function
 * in return value as a property of props
 * @param {function} dispatch with @param{action} that will call action 
 * @return {props} of component
 */
const mapDispatchToProps = dispatch => ({
	getShortScheduler: () => {
		dispatch(actions.getShortScheduler());
	},
	addShortScheduler: (shortScheduler) => {
		dispatch(actions.addShortScheduler(shortScheduler));
	},
	deleteShortScheduler: (id) => {
		dispatch(actions.deleteShortScheduler(id));
	}
});
const mapStateToProps = state => {
	var scheduler = state.account.shortSchedulers.upcoming;
	scheduler = scheduler.concat(state.account.shortSchedulers.over);
	return {
		shortSchedulers: scheduler
	}
};
class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.fields = {
			id: { name: "id" },
			subject: { name: "title", title: "Title", default: "No Title" },
			startTime: { name: "startTime", title: "Start Time" },
			endTime: { name: "endTime", title: "End Time" },
			location: { name: "location", title: "Location" },
			color: { name: "color", default: "blue" },
			description: { name: "description" },
			recurrenceRule: { name: "repeat", default: "DAILY;INTERVAL=1;COUNT=1;" }
		};
		this.delShortSch = this.delShortSch.bind(this);
		this.addShortSch = this.addShortSch.bind(this);
		this.dataReturn = this.dataReturn.bind(this);
	}
	applyCategoryColor(args, currentView) {
		let color = args.data.color;
		if (!args.element || !color) {
			return;
		}
		if (currentView === 'Agenda') {
			args.element.firstChild.style.borderLeftColor = color;
		}
		else {
			args.element.style.backgroundColor = color;
		}
	}

	onEventRendered(args) {
		this.applyCategoryColor(args, this.scheduleObj.currentView);
	}

	getCurdate() {
		var day = new Date();
		var yy = day.getFullYear();
		var mm = day.getMonth();
		var dd = day.getDate();
		return new Date(yy, mm, dd);
	}
	delShortSch() {
		var id = document.querySelector("#IdScheduler").value;
		this.props.deleteShortScheduler(id);
		this.scheduleObj.closeEditor();
	}
	addShortSch() {
		var scheduler = {};
		scheduler.id = document.querySelector("#IdScheduler").value;
		scheduler.title = document.querySelector("#Title").value;
		scheduler.office = document.querySelector("#Office").value;
		scheduler.type = document.querySelector("#Type").value;
		scheduler.startTime = document.querySelector("#startTime").value;
		scheduler.endTime = document.querySelector("#endTime").value;
		scheduler.priority = document.querySelector("#Priority").value;
		scheduler.location = document.querySelector("#Location").value;
		scheduler.description = document.querySelector("#Description").value;
		scheduler.repeat = this.recurrObject.value;
		if (!scheduler.repeat) {
			scheduler.repeat = "";
		}
		if (scheduler.repeat.indexOf("COUNT") === -1 && scheduler.repeat.indexOf("UNTIL") === -1) {
			scheduler.repeat = scheduler.repeat + "COUNT=365";
		}
		const convert = (date) => {
			const temp = new Date(date);
			var result = temp.toJSON().substring(0, 10) + ' ' + temp.toTimeString().substring(0, 5);
			return result;
		}
		scheduler.endTime = convert(scheduler.endTime);
		scheduler.startTime = convert(scheduler.startTime);
		scheduler.complete = "false";
		this.props.addShortScheduler(scheduler);
		this.scheduleObj.closeEditor();
	}
	editorTemplate(props) {
		return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
			<tr><td className="e-textlabel">Title</td><td colSpan={4}>
				<input id="Title" className="e-field e-input" type="text" name="title" style={{ width: '100%' }} />
			</td></tr>
			<tr><td colSpan={4}>
				<input id="IdScheduler" className="e-field e-input" type="text" name="id" style={{ display: "none" }} defaultValue={props.id} />
			</td></tr>
			<tr><td className="e-textlabel">Office</td><td colSpan={4}>
				<input id="Office" className="e-field e-input" type="text" name="office" style={{ width: '50%' }} />
			</td></tr>
			<tr><td className="e-textlabel">Type</td><td colSpan={4}>
				<input id="Type" className="e-field e-input" type="text" name="type" style={{ width: '50%' }} />
			</td></tr>
			<tr><td className="e-textlabel">From</td><td colSpan={4}>
				<DateTimePickerComponent format='yyyy-MM-dd hh:mm a' id="startTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
			</td></tr>
			<tr><td className="e-textlabel">To</td><td colSpan={4}>
				<DateTimePickerComponent format='yyyy-MM-dd hh:mm a' id="endTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
			</td></tr>
			<tr><td className="e-textlabel">Recurrence</td><td colSpan={4}>
				<RecurrenceEditorComponent ref={recurrObject => this.recurrObject = recurrObject} id='RecurrenceRule' frequencies={['daily', 'weekly']} value={props.repeat}></RecurrenceEditorComponent>
			</td></tr>
			<tr><td className="e-textlabel">Priority</td><td colSpan={4} >
				<DropDownListComponent id="Priority" placeholder='Choose priority' data-name="priority" className="e-field" dataSource={['High', 'Middle', 'Low']}></DropDownListComponent>
			</td></tr>
			<tr><td className="e-textlabel">Location</td><td colSpan={4}>
				<input id="Location" className="e-field e-input" type="text" name="location" style={{ width: '50%' }} />
			</td></tr>
			<tr><td className="e-textlabel">Description</td><td colSpan={4}>
				<textarea id="Description" className="e-field e-input" name="description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
			</td></tr>
			<tr>
				<td>

				</td>
				<td>
					<button className="btn btn-danger mx-auto" onClick={this.delShortSch}>Delete</button>
				</td>
				<td>
					<button className="btn btn-primary px-3 mx-auto" onClick={this.addShortSch}>Save</button>
				</td>
			</tr>
		</tbody>
		</table> : <div>
			</div>);
	}
	onPopupOpen(args) {
		if (args.type === "EditEventInfo") {
			args.cancel = true;
			this.scheduleObj.openEditor(args.data, "Save");
		}
		else if (args.type === "QuickInfo") {
			args.cancel = true;
		}
		var save = document.getElementsByClassName('e-event-save');
		for (var i = 0; i < save.length; i++) {
			save[i].style.display = "none";
		}
		var del = document.getElementsByClassName('e-event-delete');
		for (i = 0; i < del.length; i++) {
			del[i].style.display = "none";
		}
		var cal = document.getElementsByClassName('e-event-cancel');
		for (i = 0; i < cal.length; i++) {
			cal[i].style.display = "none";
		}
	}
	onActionFailure() {
		console.log("wrong!");
	}
	componentDidMount() {
		this.props.getShortScheduler();
	}
	dataReturn() {
		return this.props.shortSchedulers;
	}
	render() {
		return (
			<div id="calendar" className="d-flex bg-user-home">
				<SideBar />
				<div className="main-content">
					<TopBar />
					<div className="ml-0 mt-3 mr-5">
						<ScheduleComponent
							height="85vh"
							ref={schedule => this.scheduleObj = schedule}
							currentView="Week" selectedDate={this.getCurdate()}
							eventRendered={this.onEventRendered.bind(this)}
							eventSettings={{ dataSource: this.dataReturn(), fields: this.fields }}
							editorTemplate={this.editorTemplate.bind(this)}
							actionFailure={this.onActionFailure.bind(this)}
							popupOpen={this.onPopupOpen.bind(this)}>
							<ViewsDirective>
								<ViewDirective option="Day" startHour="05:00" endHour="24:00"></ViewDirective>
								<ViewDirective option="Week" startHour="05:00"
									endHour="24:00"></ViewDirective>
								<ViewDirective option="Month"></ViewDirective>
								<ViewDirective option="Agenda"></ViewDirective>
							</ViewsDirective>
							<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
						</ScheduleComponent >
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);