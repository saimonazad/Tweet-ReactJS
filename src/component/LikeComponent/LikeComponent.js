import React, { Component } from "react";
import "./LikeComponent.css";

class LikeComponent extends Component {
  state = {
    isLoved: this.props.like
  };

  loveReactHandler = () => {
    const loveStatus = !this.state.isLoved;
    this.setState({ isLoved: loveStatus });
  };

  render() {
    let heart = "far fa-heart";

    if (this.state.isLoved) {
      heart = "fas fa-heart heart-red";
    }

    return (
      <div>
        <i class={heart} onClick={this.loveReactHandler.bind(this)} />
      </div>
    );
  }
}

export default LikeComponent;
