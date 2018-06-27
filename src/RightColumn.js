import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import tick from "./tick.svg";
import iconDelete from "./icon-delete.svg";
import iconPeople from "./icon-people.svg";
import { followData, trendsData } from "./Data";

import "./RightColumn.css";

const SmallText = styled.div`
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 12px;
`;

function FollowsHeader(props) {
  return (
    <div className="header-block">
      <div className="text-header">Who to follow</div>
      <div className="divider">•</div>
      <Link to="#">
        <SmallText>Refresh</SmallText>
      </Link>
      <div className="divider">•</div>
      <Link to="/who_to_follow/suggestions">
        <SmallText>View all</SmallText>
      </Link>
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

const DescriptionLink = styled(Link)`
  &:hover {
    ${Author} {
      text-decoration: underline;
      color: #333333;
    }
  }
`;

const Tick = styled.img`
  margin-left: 4px;
`;

function FollowRow(props) {
  return (
    <DescriptionLink className="follows-follow-description-row" to="#">
      <Author>{props.follow["author"]}</Author>
      {props.follow["isVerified"] ? (
        <Tick src={tick} alt="verified" />
      ) : (
        <div />
      )}
      <AuthorShort>{props.follow["authorShort"]}</AuthorShort>
    </DescriptionLink>
  );
}

const Button = styled.button`
  background: #ffffff;
  border-radius: 90px;
  margin-top: 8px;
  padding: 6px;
  border: 1px solid #cc8500;
  box-sizing: border-box;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  width: 90px;
  color: #e69600;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    background: #ffedcc;
  }
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
    <div>
      <div className="follows-follow">
        <DescriptionLink to="#">
          <img
            className="follows-follow-logo"
            src={props.follow["image"]}
            alt={props.follow["author"]}
          />
        </DescriptionLink>
        <FollowDescription follow={props.follow} />
        <img className="follows-follow-delete" src={iconDelete} alt="delete" />
      </div>
      <div className="follows-center">
        <Rule />
      </div>
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
      <Link to="/who_to_follow/import">
        <SmallText>Find people you know</SmallText>
      </Link>
    </div>
  );
}

function Follows(props) {
  return (
    <div className="follows">
      <FollowsHeader />

      {props.follows.map(followItem => <Follow follow={followItem} />)}
      <People />
    </div>
  );
}

function TrendsHeader(props) {
  return (
    <div className="header-block">
      <div className="text-header">United Kingdom Trends</div>
      <div className="divider">•</div>
      <Link to="/who_to_follow/suggestions">
        <SmallText>Change</SmallText>
      </Link>
    </div>
  );
}

const TrendText = styled.div`
  font-family: HelveticaNeue;
  line-height: normal;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600;
`;

const TextSmall = styled.div`
  font-family: HelveticaNeue;
  line-height: 22px;
  font-size: 12px;
  letter-spacing: 0.01px;
  color: #687b8a;
`;

const TrendLink = styled(Link)`
  &:hover {
    ${TrendText} {
      text-decoration: underline;
    }
  }
`;

function Trend(props) {
  return (
    <TrendLink className="trends-trend" to={props.trend["text"]}>
      <TrendText>{props.trend["text"]}</TrendText>
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
    </TrendLink>
  );
}

const Empty = styled.div`
  height: 40px;
`;

function Trends(props) {
  return (
    <div className="trends">
      <TrendsHeader />
      {props.trends.map(trendItem => <Trend trend={trendItem} />)}
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
