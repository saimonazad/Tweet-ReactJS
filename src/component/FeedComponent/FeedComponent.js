import React from "react";
import "./FeedComponent.css";

export default class FeedComponent extends React.Component {
  render() {
    const { activity } = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img src={activity.user.avatar} width="30" height="30" alt="" />
        </div>
        <span className="time">{activity.timestamp}</span>
        <p>{activity.text}</p>
      </div>
    );
  }
}
