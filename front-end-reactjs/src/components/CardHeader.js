import React, { useEffect, useState } from "react";

/**
 * header of card
 * @param {object} props 
 *  {string} title: title shown in left header
 *  {string} type: type of card ["add", "close"] default is close
 *  {function} show: function handle when click right icon
 */
export default function CardHeader(props) {
  const [icon, setIcon] = useState(<i className="fas fa-times fa-fw"
    style={{ fontSize: "20px", fontWeight: "550" }}></i>);
  useEffect(() => {
    if (props.type === "add") setIcon(<i className="fas fa-plus fa-fw"
      style={{ fontSize: "20px", fontWeight: "550", color: "#1e82b4" }}></i>);
    else setIcon(<i className="fas fa-times fa-fw"
      style={{ fontSize: "20px", fontWeight: "550" }}></i>);
  }, [props.type]);

  return (
    <header className="w-100 d-flex justify-content-between card-header pb-0 border-0"
      style={{ backgroundColor: "#ebecf0" }}>
      {/* title in the left */}
      <h6 className="font-weight-bold" style={{ color: "#1e82b4" }}>{props.title}</h6>
      {/* button in the right */}
      <span type="button"
        href="#"
        onClick={props.show}>
        {icon}</span>
    </header>
  );
}