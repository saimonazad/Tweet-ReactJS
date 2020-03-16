import React from "react";
import "./FeedComponent.css";
import LikeComponent from "../LikeComponent/LikeComponent";
import moment from 'moment';

export default class FeedComponent extends React.Component {
  render() {
    const { activity } = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img src={activity.user.avatar} width="30" height="30" alt="" />
        </div>
        <span className="time">{moment(activity.timestamp).fromNow()}</span>
        <p>{activity.text}</p>
        <LikeComponent like={activity.love} />
      </div>
    );
  }
}
