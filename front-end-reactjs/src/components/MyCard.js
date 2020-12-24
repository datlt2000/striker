import React from "react";
import { useState } from "react";
import ListCard from "./ListCard";
import CardHeader from "./CardHeader";
import InputGroup from "./InputGroup";

export default function MyCard(props) {
	const [addCard, setAddCard] = useState(false);
	const [value, setValue] = useState(props.defaultValue);
	function show() {
		setValue(props.defaultValue);
		setAddCard(!addCard);
	};
	function edit(data) {
		show();
		setValue(data);
	};
	if (addCard) {
		return (
			<div className="shadow rounded m-1 card d-flex align-items-center animated--grow-in"
				style={{ maxWidth: "600px", backgroundColor: "#ebecf0" }}>
				<CardHeader title={"Add " + props.title} type="close" show={show}></CardHeader>
				<InputGroup inputs={props.input} addData={props.addData} show={show} value={value} delete={props.delete}/>
			</div>
		);
	}
	return (
		<div className="shadow rounded m-1 card"
			style={{ maxWidth: "600px", backgroundColor: "#ebecf0" }}>
			<CardHeader type="add" title={props.title} show={show} />
			<ListCard items={props.data} edit={edit} />
		</div>
	);
}