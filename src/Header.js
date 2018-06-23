import React from "react";
import styled from "styled-components";

import iconTwitter from "./icon-twitter.svg";
import iconMagnifier from "./icon-magnifier.svg";
import avatarSmall from "./avatar-small.svg";

import { headerData } from "./Data";

import "./Header.css";

function NavPair(props) {
  return (
    <div className="nav-pair">
      <img className="nav-pair-logo" src={props.src} alt={props.text} />
      <div className="nav-pair-text">{props.text}</div>
    </div>
  );
}

const MenuTweet = styled.div`
  background: #1da1f2;
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
        <NavPair
          src={headerData["home"]["icon"]}
          text={headerData["home"]["text"]}
        />
        <NavPair
          src={headerData["moments"]["icon"]}
          text={headerData["moments"]["text"]}
        />
        <NavPair
          src={headerData["notifications"]["icon"]}
          text={headerData["notifications"]["text"]}
        />
        <NavPair
          src={headerData["messages"]["icon"]}
          text={headerData["messages"]["text"]}
        />
      </div>
      <a href="http://twitter.com">
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
