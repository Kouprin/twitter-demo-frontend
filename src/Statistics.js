import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import oval from "./oval.svg";

import { statisticsData } from "./Data";

import "./Statistics.css";

const NavPairText = styled.div`
  padding-top: 8px;
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
  padding-bottom: 8px;
  font-family: HelveticaNeue;
  font-weight: 600;
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.01px;
  width: 100%;
  border-bottom: 2px solid #ffffff;
  color: #788a98;
`;

const NavPairLink = styled(NavLink)`
  &.active,
  &:hover {
    ${NavPairText} {
      color: #707e88;
    }
    ${NavPairCount} {
      color: #e69600;
      border-bottom: 2px solid #cc8500;
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

const Follow = styled.button`
  background: #ffffff;
  border-radius: 100px;
  margin: 12px;
  padding: 8px;
  border: 1px solid #cc8500;
  box-sizing: border-box;
  border-radius: 100px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  width: 100px;
  color: #e69600;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    background: #ffedcc;
  }
`;

export function Statistics() {
  return (
    <div className="Statistics">
      <div className="empty" />
      <div className="nav">
        {statisticsData.map(statisticsItem => (
          <NavPair
            text={statisticsItem["text"]}
            count={statisticsItem["count"]}
            whereTo={statisticsItem["whereTo"]}
          />
        ))}
      </div>
      <div className="menu">
        <Follow>Follow</Follow>
        <div className="menu-more">
          <img className="menu-more-oval" src={oval} alt="oval" />
          <img className="menu-more-oval" src={oval} alt="oval" />
          <img className="menu-more-oval" src={oval} alt="oval" />
        </div>
      </div>
    </div>
  );
}
