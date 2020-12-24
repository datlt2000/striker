import React from "react";

const TextInput = (input) =>
	<div className="form-group mx-2 my-0" key={input.name}>
		<label className="ml-1 my-0">{input.name}</label>
		<input className="form-control"
			type={input.type}
			name={input.name}
			defaultValue={input.value}
			onChange={input.addPro}
			required />
	</div>

const DateInput = (input) =>
	<div className="form-group mx-2 my-0" key={input.name}>
		<label className="ml-1 my-0">{input.name}</label>
		<input
			className="form-control"
			type={input.type}
			name={input.name}
			defaultValue={input.value}
			onChange={input.addPro}
			required />
	</div>

const TimeInput = (input) =>
	<div className="form-group mx-2 my-0" key={input.name}>
		<label className="ml-1 my-0">{input.name}</label>
		<input
			className="form-control"
			type={input.type}
			name={input.name}
			defaultValue={input.value}
			onChange={input.addPro}
			required />
	</div>

const SelectInput = (input) =>
	<div className="form-group mx-2 my-0" key={input.name}>
		<label className="ml-1 my-0">{input.name}</label>
		<select className="form-control" onChange={input.addPro} defaultValue={input.value} name={input.name}>
			{input.options.map((option) => {
				return (<option value={option} key={option}>{option}</option>);
			})}
		</select>
	</div>
const CheckBoxInput = (input) =>
	<div className="custom-control custom-checkbox my-0" key={input.name}>
		<input type={input.type}
			name={input.name}
			defaultChecked={input.value === "true" ? true : false}
			value={"true"}
			onChange={input.addPro} />
		<label className="ml-2 my-0">{input.name}</label>
	</div>
const Inputs = {
	'text': TextInput,
	'select': SelectInput,
	'date': DateInput,
	'time': TimeInput,
	'checkbox': CheckBoxInput
}

export default function InputGroup(props) {
	var newdata = Object.assign({}, props.value);
	const addProps = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		newdata[name] = value;
	};
	const submit = (event) => {
		event.preventDefault();
		props.addData(newdata);
		props.show();
	};
	const deleteScheduler = (event) => {
		event.preventDefault();
		props.delete(props.value.id);
		props.show();
	};
	return (
		<form className="card-body" onSubmit={submit}
			style={{ maxWidth: "400px", minWidth: "350px" }}>
			{props.inputs.map((input) => {
				let type = input.type;
				input["addPro"] = addProps;
				if (input.type === "time" && props.value[input.name].length > 10) {
					props.value[input.name] = props.value[input.name].substring(11, 16);
				}
				input["value"] = props.value[input.name];
				if (type in Inputs)
					return Inputs[type](input);
				return TextInput(input);
			})}
			<br />
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary mr-4 px-4" type="submit">
					Save
				</button>
				<button className="btn btn-warning px-3 mr-4" onClick={deleteScheduler}>
					Delete
				</button>
				<button className="btn btn-danger px-3" onClick={props.show}>
					Cancel
				</button>
			</div>
		</form>
	);
}