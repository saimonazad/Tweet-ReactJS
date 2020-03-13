import React, { Component } from "react";
import "./LikeComponent.css";

class LikeComponent extends Component {
  state = {
    likes: this.props.like
  };

  addLike = () => {
    const newLikes = this.state.likes + 1;
    this.setState({ likes: newLikes });
  };

  render() {
    return (
      <button onClick={this.addLike.bind(this)}>Love {this.state.likes}</button>
    );
  }
}

export default LikeComponent;
