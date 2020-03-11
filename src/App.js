import React from "react";
import NavComponent from "./component/NavComponent/NavComponent";
import ContentComponent from "./component/ContentComponent/ContentComponent";
import "./styles.css";
import data from "./data";
import ClockComponent from "./component/ClockComponent/ClockComponent";

export default function App() {
  return (
    <div className="App">
      <NavComponent title="Timeline" />
      <ClockComponent />
      <ContentComponent />
    </div>
  );
}
