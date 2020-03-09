import React from "react";
import NavComponent from "./component/NavComponent/NavComponent";
import ItemComponent from "./component/ItemComponent/ItemComponent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavComponent />
      <ItemComponent />
    </div>
  );
}
