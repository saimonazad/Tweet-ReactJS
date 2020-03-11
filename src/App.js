import React from "react";
import NavComponent from "./component/NavComponent/NavComponent";
import ItemComponent from "./component/ItemComponent/ItemComponent";
import "./styles.css";
import data from "./data";
import ClockComponent from "./component/ClockComponent/ClockComponent";

export default function App() {
  return (
    <div className="App">
      <NavComponent title="Timeline" />
      <ClockComponent />
      <ItemComponent activities={data} />
    </div>
  );
}
