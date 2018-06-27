import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import oval from "./oval.svg";

import { statisticsData } from "./Data";

import "./Statistics.css";

const NavPairText = styled.div`
  padding-top: 4px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: HelveticaNeue;
  font-weight: 600;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.01px;
  color: #788a98;
`;

const NavPairCount = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 4px;
  font-family: HelveticaNeue;
  font-weight: 600;
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.01px;
  border-bottom: 4px solid #ffffff;
  color: #788a98;
`;

const NavPairLink = styled(NavLink)`
  &.active,
  &:hover {
    ${NavPairText} {
      color: #707e88;
    }
    ${NavPairCount} {
      color: #1da1f2;
      border-bottom: 4px solid #1da1f2;
    }
  }
`;

function NavPair(props) {
  return (
    <NavPairLink className="nav-pair" to={props.whereTo}>
      <NavPairText>{props.text}</NavPairText>
      <NavPairCount>{props.count}</NavPairCount>
    </NavPairLink>
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
          whereTo={statisticsData["tweets"]["whereTo"]}
        />
        <NavPair
          text={statisticsData["following"]["text"]}
          count={statisticsData["following"]["count"]}
          whereTo={statisticsData["following"]["whereTo"]}
        />
        <NavPair
          text={statisticsData["followers"]["text"]}
          count={statisticsData["followers"]["count"]}
          whereTo={statisticsData["followers"]["whereTo"]}
        />
        <NavPair
          text={statisticsData["likes"]["text"]}
          count={statisticsData["likes"]["count"]}
          whereTo={statisticsData["likes"]["whereTo"]}
        />
        <NavPair
          text={statisticsData["lists"]["text"]}
          count={statisticsData["lists"]["count"]}
          whereTo={statisticsData["lists"]["whereTo"]}
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
