import React from "react";
import { useState } from "react";
import CardHeader from "./CardHeader";
import ListCard from "./ListCard";
import InputGroup from "./InputGroup";

export default function Classes(props) {
  const [shown, setShown] = useState(false);
  const show = () => {
    setShown(!shown);
  }

  const items = [
    {
      title: "cnpm",
      subTitle: "bui mai anh",
      color: "blue",
      body: "26-08-2020",
      type: "class"
    },
    {
      title: "mmt",
      subTitle: "vu tuyet trinh",
      color: "green",
      body: "30-09-2020",
      type: "class"
    }
  ];

  //input field of homeword
  const inputs = [
    {
      name: "Class Name",
      type: "text"
    },
    {
      name: "Room",
      type: "text"
    },
    {
      name: "Start",
      type: "date"
    },
    {
      name: "End",
      type: "date"
    },
    {
      name: "Color",
      options: ["blue", "red", "yellow", "green"],
      type: "select"
    },
    {
      name: "Teacher",
      type: "text"
    }
  ];

  if (shown) {
    return (
      <div className="shadow m-1 rounded card d-flex align-items-center animated--grow-in"
        style={{ maxWidth: "380px", backgroundColor: "#ebecf0" }}>
        <CardHeader title="Add Class" show={show} />
        <InputGroup inputs={inputs} />
      </div>
    );
  }
  return (
    // class card
    <div className="h-100 shadow m-1 card rounded"
        style={{ maxWidth: "380px", backgroundColor: "#ebecf0" }}>
      {/* title of card */}
      <CardHeader type="add" show={show} title="Classes" />
      {/* navbar of classes card */}
      <nav className="btn-group mb-2" role="group">
        <button className="btn btn-primary py-0 active no-radius">All</button>
        <button className="btn btn-primary py-0 no-radius">Today</button>
        <button className="btn btn-primary py-0 no-radius">Tomorrow</button>
      </nav>
      {/* list of items */}
      <ListCard items={items} />
    </div>
  );
}