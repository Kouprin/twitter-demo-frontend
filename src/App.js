import React, { Component } from "react";
import icon_home from "./icon_home.svg";
import icon_moments from "./icon_moments.svg";
import icon_notifications from "./icon_notifications.svg";
import icon_messages from "./icon_messages.svg";
import icon_twitter from "./icon_twitter.svg";
import rectangle from "./rectangle.svg";
import icon_magnifier from "./icon_magnifier.svg";
import avatar from "./avatar.svg";
import avatar_small from "./avatar_small.svg";
import "./App.css";

function HeaderNavPair(props) {
  return (
    <div className="Header-nav-pair">
      <img className="Header-nav-pair-logo" src={props.src} alt={props.text} />
      <div className="Header-nav-pair-text">{props.text}</div>
    </div>
  );
}

const header_data = [
  [icon_home, "Home"],
  [icon_moments, "Moments"],
  [icon_notifications, "Notifications"],
  [icon_messages, "Messages"]
];

class Header extends Component {
  render() {
    return (
      <div className="">
        <header className="Header">
          <div className="Header-nav">
            <HeaderNavPair src={header_data[0][0]} text={header_data[0][1]} />
            <HeaderNavPair src={header_data[1][0]} text={header_data[1][1]} />
            <HeaderNavPair src={header_data[2][0]} text={header_data[2][1]} />
            <HeaderNavPair src={header_data[3][0]} text={header_data[3][1]} />
          </div>
          <div className="Header-twitter">
            <img
              className="Header-twitter-logo"
              src={icon_twitter}
              alt="icon_twitter"
            />
          </div>
          <div className="Header-menu">
            <div className="Header-menu-search">
              <div className="Header-menu-search-text">Search Twitter</div>
              <img
                className="Header-menu-search-magnifier"
                src={icon_magnifier}
                alt="icon_magnifier"
              />
            </div>
            <div className="Header-menu-avatar">
              <img
                className="Header-menu-avatar-image"
                src={avatar_small}
                alt="avatar_small"
              />
            </div>
            <div className="Header-menu-tweet">Tweet</div>
          </div>
        </header>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="App-header">
          <img src={icon_home} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Header;
