import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import "../css/user-home.css";
import bg from "../img/bg-home.jpeg";

/**
 * a card of workflow
 * @param {object} props
 * title {string} name of workflow
 * img {link} background of workflow
 */
function Workflow(props) {
  return (
    <Link className="card p-0">
      <img className="card-img" src={props.img} alt="img" />
      <div className="card-img-overlay nav-link" style={{ backgroundColor: "rgba(51,51,51, 0.3)", opacity: "0.8" }}>
        <h2 className="card-title text-center text-white">
          {props.title}
        </h2>
      </div>
    </Link>
  );
}

export default function Groups(props) {
  const workflows = [
    {
      title: "hello",
      img: bg,
    },
    {
      title: "he",
      img: bg,
    },
    {
      title: "ha",
      img: bg,
    },
    {
      title: "hi",
      img: bg,
    }
  ];

  return (
    <div id="groups" className="d-flex bg-user-home">
      <SideBar />
      <div className="main-content">
        <TopBar />
        <div className="container">
          <div className="d-flex justify-content-start row">
            {workflows.map(table => {
              return (
                <div className="col-10 col-md-5 col-lg-3">
                  <Workflow title={table.title} img={table.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
