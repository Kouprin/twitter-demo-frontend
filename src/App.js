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
import oval from "./oval.svg";
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

function Header() {
  return (
    <div className="Header">
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
    </div>
  );
}

function Cover() {
  return (
    <div className="Cover">
      <img className="Cover-image" src={process.env.PUBLIC_URL + "cover.png"} />
    </div>
  );
}

function StatisticsNavPair(props) {
  if (props.active == true)
    return (
      <div className="Statistics-nav-pair">
        <div className="Statistics-nav-pair-active-text">{props.text}</div>
        <div className="Statistics-nav-pair-active-count">{props.count}</div>
        <div className="Statistics-nav-pair-active-bar" />
      </div>
    );
  else
    return (
      <div className="Statistics-nav-pair">
        <div className="Statistics-nav-pair-text">{props.text}</div>
        <div className="Statistics-nav-pair-count">{props.count}</div>
      </div>
    );
}

const statistics_data = [
  ["Tweets", "8,058", true],
  ["Following", "721", false],
  ["Followers", "1,815", false],
  ["Likes", "460", false],
  ["Lists", "2", false]
];

function Statistics() {
  return (
    <div className="Statistics">
      <div className="Statistics-nav">
        <StatisticsNavPair
          text={statistics_data[0][0]}
          count={statistics_data[0][1]}
          active={statistics_data[0][2]}
        />
        <StatisticsNavPair
          text={statistics_data[1][0]}
          count={statistics_data[1][1]}
          active={statistics_data[1][2]}
        />
        <StatisticsNavPair
          text={statistics_data[2][0]}
          count={statistics_data[2][1]}
          active={statistics_data[2][2]}
        />
        <StatisticsNavPair
          text={statistics_data[3][0]}
          count={statistics_data[3][1]}
          active={statistics_data[3][2]}
        />
        <StatisticsNavPair
          text={statistics_data[4][0]}
          count={statistics_data[4][1]}
          active={statistics_data[4][2]}
        />
      </div>
      <div className="Statistics-menu">
        <div className="Statistics-menu-follow">Follow</div>
        <div className="Statistics-menu-more">
          <img className="Statistics-menu-more-oval" src={oval} alt="oval" />
          <img className="Statistics-menu-more-oval" src={oval} alt="oval" />
          <img className="Statistics-menu-more-oval" src={oval} alt="oval" />
        </div>
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="LeftColumn">
      <div className="LeftColumn-avatar">
        <img className="LeftColumn-avatar-image" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="Desktop">
        <Header />
        <Cover />
        <Statistics />
        <LeftColumn />
      </div>
    );
  }
}

export default App;
