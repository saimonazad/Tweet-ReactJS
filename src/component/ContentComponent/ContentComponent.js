import React from "react";
import "./ContentComponent.css";
import FeedComponent from "../FeedComponent/FeedComponent";
import data from "../../data";

export default class ContentComponent extends React.Component {
  render() {
    return (
      <div className="content">
        {data.map(activity => (
          <FeedComponent activity={activity} />
        ))}
      </div>
    );
  }
}
