import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import iconPinned from "./icon-pinned.svg";
import iconComments from "./icon-comments.svg";
import iconRetweet from "./icon-retweet.svg";
import iconLoves from "./icon-loves.svg";
import iconLoved from "./icon-loved.svg";
import iconEnvelope from "./icon-envelope.svg";

import { tabData, tweetData } from "./Data";

import "./Middle.css";

const TabNav = styled(NavLink)`
  margin: 12px 20px 8px 16px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 18px;
  letter-spacing: -0.1px;
  font-weight: 600;

  color: #e69600;
  &.active,
  &:hover {
    color: #000000;
  }
`;

function Tab(props) {
  return (
    <div className="tab">
      {tabData.map(tabItem => (
        <TabNav to={tabItem["whereTo"]}>{tabItem["text"]}</TabNav>
      ))}
    </div>
  );
}

function TweetLeft(props) {
  return (
    <div className="tweet-data-left">
      {props.pinned ? (
        <img
          className="tweet-data-left-pinned"
          src={iconPinned}
          alt="iconPinned"
        />
      ) : (
        <div />
      )}
      <img
        className="tweet-data-left-avatar"
        src={props.avatar}
        alt="avatarMid"
      />
    </div>
  );
}

function TweetRightPinned(props) {
  if (props.pinned)
    return <div className="tweet-data-right-pinned">Pinned Tweet</div>;
  else return <div />;
}

function TweetRightAuthor(props) {
  return (
    <div className="tweet-data-right-author">
      <div className="tweet-data-right-author-text">{props.author}</div>
      <div className="tweet-data-right-author-short">{props.authorShort}</div>
      <div className="tweet-data-right-author-divider">•</div>
      <div className="tweet-data-right-author-date">{props.date}</div>
    </div>
  );
}

const TweetRightText = styled.div`
  font-family: HelveticaNeue;
  line-height: 22px;
  font-size: 16px;
  letter-spacing: -0.22px;
  color: #292f33;
  ${props =>
    props.big &&
    css`
      letter-spacing: 0.38px;
      line-height: 30px;
      font-size: 25px;
    `};
`;

const TweetRightActionsPairNumber = styled.div`
  padding: 4px;
  margin-left: 4px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 13px;
  letter-spacing: -0.2px;
  font-weight: 600;
  color: #667580;
  ${props =>
    props.isLoved &&
    css`
      color: #e2264d;
    `};
`;

function TweetRightActionPair(props) {
  return (
    <div className="tweet-data-right-actions-pair">
      <img
        className="tweet-data-right-actions-pair-icon"
        src={props.isLoved ? iconLoved : props.icon}
        alt={props.icon}
      />
      <TweetRightActionsPairNumber isLoved={props.isLoved}>
        {props.number}
      </TweetRightActionsPairNumber>
    </div>
  );
}

function TweetRightActions(props) {
  return (
    <div className="tweet-data-right-actions">
      <TweetRightActionPair icon={iconComments} number={props.comments} />
      <TweetRightActionPair icon={iconRetweet} number={props.retweets} />
      <TweetRightActionPair
        icon={iconLoves}
        number={props.loves}
        isLoved={props.isLoved}
      />
      <TweetRightActionPair icon={iconEnvelope} />
    </div>
  );
}

const TweetRightImage = styled.img`
  margin-top: 8px;
  width: 506px;
  height: auto;
`;

function TweetRight(props) {
  return (
    <div className="tweet-data-right">
      <TweetRightPinned pinned={props.data["isPinned"]} />
      <TweetRightAuthor
        author={props.data["author"]}
        authorShort={props.data["authorShort"]}
        date={props.data["date"]}
      />
      <TweetRightText
        big={props.data["isBig"]}
        dangerouslySetInnerHTML={{ __html: props.data["text"] }}
      />
      {props.data["image"] ? (
        <TweetRightImage src={props.data["image"]} />
      ) : (
        <div />
      )}
      <TweetRightActions
        comments={props.data["comments"]}
        retweets={props.data["retweets"]}
        loves={props.data["loves"]}
        isLoved={props.data["isLoved"]}
      />
    </div>
  );
}

function Tweet(props) {
  return (
    <div className="tweet">
      <div className="tweet-line" />
      <div className="tweet-data">
        <TweetLeft
          pinned={props.data["isPinned"]}
          avatar={props.data["avatar"]}
        />
        <TweetRight data={props.data} />
      </div>
    </div>
  );
}

export function Middle(props) {
  return (
    <div className="Middle">
      <Tab />
      {tweetData.map(tweetItem => <Tweet data={tweetItem} />)}
    </div>
  );
}
