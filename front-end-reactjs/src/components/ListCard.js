import React from "react";

/**
 * item of list card
 * @param {object} props(title, subTitle, color, subTitle, body, type)
 * {string} title
 * {string} color: of left border
 * {string} subTitle: metadata of card
 * {string} body: that you want to show
 * {string} type
 */
function Card(props) {
	return (
		<div className="card m-1" role="button"
			onClick={props.edit}
			style={{
				borderLeftColor: props.color,
				borderLeftWidth: "7px",
				backgroundColor: "#FFF"
			}}>
			<div className="no-gutters p-3 align-items-between row card-body">
				<div className="col mr-2">
					<a className="font-weight-bold text-uppercase mb-0"
						href="/"
						style={{ color: "#1e82b4", fontSize: "15px" }}>{props.title}</a>
					<p className="mb-0" style={{ color: "#f56565" }}>
						{props.body}
					</p>
				</div>
				<div className="col-auto">
					<div style={{ color: "#718096", textAlign: "right", fontSize: "15px" }}>{props.subTitle}</div>
					<div style={{ color: "#718096", textAlign: "right", fontSize: "15px" }}>{props.type}</div>
				</div>
			</div>
		</div>
	);
}

/**
 * list of card
 * @param {object} props : array of card object(title, subTitle, body, color, type)
 */
export default function ListCard(props) {
	return (
		<div>
			{props.items.map((item) => {
				return <Card title={item.title} type={item.type} edit={() => { props.edit(item) }}
					subTitle={item.office} body={item.endTime.length > 12 ? item.endTime.substring(11, 16) : item.endTime} color={item.color} key={item.id} />
			})}
		</div>
	);
}
