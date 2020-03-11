import React from "react";
import ReactDOM from "react-dom";

import "./NavComponent.css";

export default function NavComponent(props) {
  return (
    <div className="notificationsFrame">
      <div className="titleBar">
        <div className="row">
          <div className="menuIcon">
            <i className="fas fa-bars" />
          </div>
          <span className="title">{props.title}</span>
          <div className="searchIcon">
            <i class="fas fa-search" />
          </div>
        </div>
      </div>
    </div>
  );
}
