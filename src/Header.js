import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconTwitter from "./icon-twitter.svg";
import iconMagnifier from "./icon-magnifier.svg";
import avatarSmall from "./avatar-small.svg";

import { headerData } from "./Data";

import "./Header.css";

const NavPairText = styled.div`
  margin-left: 6px;
  font-family: HelveticaNeue;
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.01px;
`;

const NavPairLink = styled(Link)`
  color: #667580;
  border-bottom: 2px solid #ffffff;
  &:hover {
    color: #e69600;
    border-bottom: 2px solid #cc8500;
  }
`;

function NavPair(props) {
  return (
    <NavPairLink className="nav-pair" to={props.whereTo}>
      <img className="nav-pair-logo" src={props.src} alt={props.text} />
      <NavPairText>{props.text}</NavPairText>
    </NavPairLink>
  );
}

const MenuTweet = styled.button`
  background: #e69600;
  box-shadow: none;
  cursor: pointer;
  border-radius: 100px;
  margin: 8px;
  padding: 8px;
  font-family: HelveticaNeue;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.01px;
  font-weight: 600;
  color: #ffffff;
  width: 72px;
  &:hover {
    background: #cc8500;
  }
`;

const Twitter = styled.img`
  position: absolute;
  left: 50%;
  margin-top: 16px;
`;

const MenuAvatar = styled.img`
  margin: 8px;
`;

export function Header() {
  return (
    <div className="Header">
      <div className="nav">
        {headerData.map(navItem => (
          <NavPair
            src={navItem["icon"]}
            text={navItem["text"]}
            whereTo={navItem["whereTo"]}
          />
        ))}
      </div>
      <a href="/">
        <Twitter src={iconTwitter} alt="iconTwitter" />
      </a>

      <div className="menu">
        <div className="menu-search">
          <div className="menu-search-text">Search Twitter</div>
          <img
            className="menu-search-magnifier"
            src={iconMagnifier}
            alt="iconMagnifier"
          />
        </div>
        <MenuAvatar src={avatarSmall} alt="avatarSmall" />
        <MenuTweet>Tweet</MenuTweet>
      </div>
    </div>
  );
}
