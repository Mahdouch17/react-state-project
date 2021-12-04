import React, { Component } from "react";

class Profile extends Component {
  state = { time: 0 };
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({ time: this.state.time + 1 });
  }
  render() {
    return (
      <div>
        <h2>The time interval : {this.state.time}</h2>
        <div>
          <img
            style={{
              width: 120,
              height: 180,
              border: "2px #1A5276 solid",
              borderRadius: 15,
            }}
            src={this.props.person.imgSrc}
          />
          <div style={{ fontSize: 24 }}>{this.props.person.fullName}</div>
          <div style={{ fontSize: 18 }}>{this.props.person.bio}</div>
          <div style={{ fontSize: 18 }}>{this.props.person.profession}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
