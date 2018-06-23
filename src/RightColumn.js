import React from "react";
import styled from "styled-components";

import tick from "./tick.svg";
import iconDelete from "./icon-delete.svg";
import iconPeople from "./icon-people.svg";
import { followData, trendsData } from "./Data";

import "./RightColumn.css";

const SmallLink = styled.a`
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 12px;
  color: #1da1f2;
`;

function FollowsHeader(props) {
  return (
    <div className="header-block">
      <div className="text-header">Who to follow</div>
      <div className="divider">•</div>
      <SmallLink href="--refresh">Refresh</SmallLink>
      <div className="divider">•</div>
      <SmallLink href="--view all">View all</SmallLink>
    </div>
  );
}

const Author = styled.div`
  margin-left: 4px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-weight: 600;
  font-size: 13px;
  color: #333333;
`;

const AuthorShort = styled.div`
  margin-left: 4px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 12px;
  color: #657786;
`;

function FollowRow(props) {
  return (
    <div className="follows-follow-description-row">
      <Author>{props.follow["author"]}</Author>
      {props.follow["isVerified"] ? <img src={tick} alt="verified" /> : <div />}
      <AuthorShort>{props.follow["authorShort"]}</AuthorShort>
    </div>
  );
}

const Button = styled.button`
  margin-top: 12px;
  background: #ffffff;
  border-radius: 100px;
  padding: 8px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  border-radius: 100px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  width: 100px;
  color: #1da1f2;
`;

function FollowDescription(props) {
  return (
    <div className="follows-follow-description">
      <FollowRow follow={props.follow} />
      <Button>Follow</Button>
    </div>
  );
}

function Follow(props) {
  return (
    <div className="follows-follow">
      <img
        className="follows-follow-logo"
        src={props.follow["image"]}
        alt={props.follow["author"]}
      />
      <FollowDescription follow={props.follow} />
      <img className="follows-follow-delete" src={iconDelete} alt="delete" />
    </div>
  );
}

const Rule = styled.div`
  height: 1px;
  width: 90%;
  background: #e1e8ed;
`;

function People(props) {
  return (
    <div className="follows-people">
      <img
        className="follows-people-image"
        src={iconPeople}
        alt="Find people you know"
      />
      <SmallLink>Find people you know</SmallLink>
    </div>
  );
}

function Follows(props) {
  return (
    <div className="follows">
      <FollowsHeader />
      <Follow follow={props.follows[0]} />
      <div className="follows-center">
        <Rule />
      </div>
      <Follow follow={props.follows[1]} />
      <div className="follows-center">
        <Rule />
      </div>
      <Follow follow={props.follows[2]} />
      <div className="follows-center">
        <Rule />
      </div>
      <People />
    </div>
  );
}

function TrendsHeader(props) {
  return (
    <div className="header-block">
      <div className="text-header">United Kingdom Trends</div>
      <div className="divider">•</div>
      <SmallLink href="--change">Change</SmallLink>
    </div>
  );
}

const TrendLink = styled.a`
  font-family: HelveticaNeue;
  line-height: normal;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600;
  color: #1da1f2;
`;

const TextSmall = styled.div`
  font-family: HelveticaNeue;
  line-height: 22px;
  font-size: 12px;
  letter-spacing: 0.01px;
  color: #687b8a;
`;

function Trend(props) {
  return (
    <div className="trends-trend">
      <TrendLink href={props.trend["text"]}>{props.trend["text"]}</TrendLink>
      {props.trend["description"] ? (
        <TextSmall>{props.trend["description"]}</TextSmall>
      ) : (
        <div />
      )}
      {props.trend["tweets"] ? (
        <TextSmall>{props.trend["tweets"]} Tweets</TextSmall>
      ) : (
        <div />
      )}
    </div>
  );
}

const Empty = styled.div`
  height: 40px;
`;

function Trends(props) {
  return (
    <div className="trends">
      <TrendsHeader />
      <Trend trend={props.trends[0]} />
      <Trend trend={props.trends[1]} />
      <Trend trend={props.trends[2]} />
      <Trend trend={props.trends[3]} />
      <Trend trend={props.trends[4]} />
      <Empty />
    </div>
  );
}

const AboutLink = styled.a`
  font-family: HelveticaNeue;
  margin-right: 8px;
  line-height: 18px;
  font-size: 13px;
  letter-spacing: -0.4px;
  color: #718290;
`;

function About(props) {
  return (
    <div className="about">
      <AboutLink>© 2018 Twitter</AboutLink>
      <AboutLink>About</AboutLink>
      <AboutLink>Help</AboutLink>
      <AboutLink>Center</AboutLink>
      <AboutLink>Terms</AboutLink>
      <AboutLink>Privacy policy</AboutLink>
      <AboutLink>Cookies</AboutLink>
      <AboutLink>Ads info</AboutLink>
    </div>
  );
}

export function RightColumn() {
  return (
    <div className="RightColumn">
      <div />
      <Follows follows={followData} />
      <Trends trends={trendsData} />
      <About />
    </div>
  );
}
