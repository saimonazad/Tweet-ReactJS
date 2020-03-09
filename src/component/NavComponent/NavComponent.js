import React from "react";
import ReactDOM from "react-dom";

import "./NavComponent.css";

export default function NavComponent() {
  return (
    <div className="notificationsFrame">
      <div className="titleBar">
        <div className="row">
          <div className="menuIcon">
            <i class="fas fa-bars" />
          </div>
          <span className="title">Timeline</span>
          <div className="searchIcon">
            <i class="fas fa-search" />
          </div>
        </div>
      </div>
    </div>
  );
}
