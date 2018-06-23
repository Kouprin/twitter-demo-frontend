import React from "react";

import oval from "./oval.svg";

import { statisticsData } from "./Data";

import "./Statistics.css";

function NavPair(props) {
  if (props.active)
    return (
      <div className="nav-pair">
        <div className="nav-pair-active-text">{props.text}</div>
        <div className="nav-pair-active-count">{props.count}</div>
        <div className="nav-pair-active-bar" />
      </div>
    );
  else
    return (
      <div className="nav-pair">
        <div className="nav-pair-text">{props.text}</div>
        <div className="nav-pair-count">{props.count}</div>
      </div>
    );
}

export function Statistics() {
  return (
    <div className="Statistics">
      <div className="empty" />
      <div className="nav">
        <NavPair
          text={statisticsData["tweets"]["text"]}
          count={statisticsData["tweets"]["count"]}
          active={statisticsData["tweets"]["isActive"]}
        />
        <NavPair
          text={statisticsData["following"]["text"]}
          count={statisticsData["following"]["count"]}
          active={statisticsData["following"]["isActive"]}
        />
        <NavPair
          text={statisticsData["followers"]["text"]}
          count={statisticsData["followers"]["count"]}
          active={statisticsData["followers"]["isActive"]}
        />
        <NavPair
          text={statisticsData["likes"]["text"]}
          count={statisticsData["likes"]["count"]}
          active={statisticsData["likes"]["isActive"]}
        />
        <NavPair
          text={statisticsData["lists"]["text"]}
          count={statisticsData["lists"]["count"]}
          active={statisticsData["lists"]["isActive"]}
        />
      </div>
      <div className="menu">
        <div className="menu-follow">Follow</div>
        <div className="menu-more">
          <img className="menu-more-oval" src={oval} alt="oval" />
          <img className="menu-more-oval" src={oval} alt="oval" />
          <img className="menu-more-oval" src={oval} alt="oval" />
        </div>
      </div>
    </div>
  );
}
