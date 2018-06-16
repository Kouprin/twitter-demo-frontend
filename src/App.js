import React, { Component } from "react";
import Helmet from "react-helmet";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { css } from "styled-components";
import iconHome from "./icon-home.svg";
import iconMoments from "./icon-moments.svg";
import iconNotifications from "./icon-notifications.svg";
import iconMessages from "./icon-messages.svg";
import iconTwitter from "./icon-twitter.svg";
import iconMagnifier from "./icon-magnifier.svg";
import avatar from "./avatar.svg";
import avatarMid from "./avatar-mid.svg";
import avatarSmall from "./avatar-small.svg";
import oval from "./oval.svg";
import tick from "./tick.svg";
import iconLocation from "./icon-location.svg";
import iconLink from "./icon-link.svg";
import iconJoined from "./icon-joined.svg";
import iconPinned from "./icon-pinned.svg";
import iconComments from "./icon-comments.svg";
import iconRetweet from "./icon-retweet.svg";
import iconLoves from "./icon-loves.svg";
import iconLoved from "./icon-loved.svg";
import iconEnvelope from "./icon-envelope.svg";
import "./App.css";

function HeaderNavPair(props) {
  return (
    <div className="Header-nav-pair">
      <img className="Header-nav-pair-logo" src={props.src} alt={props.text} />
      <div className="Header-nav-pair-text">{props.text}</div>
    </div>
  );
}

const headerData = {
  home: { icon: iconHome, text: "Home" },
  moments: { icon: iconMoments, text: "Moments" },
  notifications: { icon: iconNotifications, text: "Notifications" },
  messages: { icon: iconMessages, text: "Messages" }
};

const HeaderMenuTweet = styled.div`
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

const HeaderTwitter = styled.img`
  position: absolute;
  left: 50%;
  margin-top: 16px;
`;

const HeaderMenuAvatar = styled.img`
  margin: 8px;
`;

function Header() {
  return (
    <div className="Header">
      <div className="Header-nav">
        <HeaderNavPair
          src={headerData["home"]["icon"]}
          text={headerData["home"]["text"]}
        />
        <HeaderNavPair
          src={headerData["moments"]["icon"]}
          text={headerData["moments"]["text"]}
        />
        <HeaderNavPair
          src={headerData["notifications"]["icon"]}
          text={headerData["notifications"]["text"]}
        />
        <HeaderNavPair
          src={headerData["messages"]["icon"]}
          text={headerData["messages"]["text"]}
        />
      </div>
      <a href="http://twitter.com">
        <HeaderTwitter src={iconTwitter} alt="iconTwitter" />
      </a>

      <div className="Header-menu">
        <div className="Header-menu-search">
          <div className="Header-menu-search-text">Search Twitter</div>
          <img
            className="Header-menu-search-magnifier"
            src={iconMagnifier}
            alt="iconMagnifier"
          />
        </div>
        <HeaderMenuAvatar src={avatarSmall} alt="avatarSmall" />
        <HeaderMenuTweet>Tweet</HeaderMenuTweet>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="Cover">
      <img
        className="Cover-image"
        src={process.env.PUBLIC_URL + "cover.png"}
        alt="cover"
      />
    </div>
  );
}

function StatisticsNavPair(props) {
  if (props.active)
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

const statisticsData = {
  tweets: { text: "Tweets", count: "8,058", isActive: true },
  following: { text: "Following", count: "721", isActive: false },
  followers: { text: "Followers", count: "1,815", isActive: false },
  likes: { text: "Likes", count: "460", isActive: false },
  lists: { text: "Lists", count: "2", isActive: false }
};

function Statistics() {
  return (
    <div className="Statistics">
      <div className="Statistics-empty" />
      <div className="Statistics-nav">
        <StatisticsNavPair
          text={statisticsData["tweets"]["text"]}
          count={statisticsData["tweets"]["count"]}
          active={statisticsData["tweets"]["isActive"]}
        />
        <StatisticsNavPair
          text={statisticsData["following"]["text"]}
          count={statisticsData["following"]["count"]}
          active={statisticsData["following"]["isActive"]}
        />
        <StatisticsNavPair
          text={statisticsData["followers"]["text"]}
          count={statisticsData["followers"]["count"]}
          active={statisticsData["followers"]["isActive"]}
        />
        <StatisticsNavPair
          text={statisticsData["likes"]["text"]}
          count={statisticsData["likes"]["count"]}
          active={statisticsData["likes"]["isActive"]}
        />
        <StatisticsNavPair
          text={statisticsData["lists"]["text"]}
          count={statisticsData["lists"]["count"]}
          active={statisticsData["lists"]["isActive"]}
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

function Author(props) {
  if (props.tick)
    return (
      <div className="LeftColumn-author">
        <div className="LeftColumn-author-name">{props.name}</div>
        <img className="LeftColumn-author-tick" src={tick} alt="tick" />
      </div>
    );
  else
    return (
      <div className="LeftColumn-author">
        <div className="LeftColumn-author-name">{props.name}</div>
      </div>
    );
}

function AuthorShort(props) {
  return (
    <div className="LeftColumn-authorShort">
      <div className="LeftColumn-authorShort-name">{props.name}</div>
      <div className="LeftColumn-authorShort-follows">{props.follows}</div>
    </div>
  );
}

const descriptionText =
  "UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.";

function Description(props) {
  return (
    <div className="LeftColumn-description">
      <div className="LeftColumn-description-text">{props.text}</div>
    </div>
  );
}

const LeftColumnContactsRowText = styled.a`
  margin-left: 16px;
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 0.01px;

  color: #657786;
  ${props =>
    props.isLink &&
    css`
      color: #1da1f2;
    `};
`;

function ContactsRow(props) {
  if (props.text === undefined) return <div />;
  else
    return (
      <div className="LeftColumn-contacts-row">
        <img
          className="LeftColumn-contacts-row-icon"
          src={props.icon}
          alt={props.icon}
        />
        <LeftColumnContactsRowText
          href={props.isLink ? "http://" + props.text : undefined}
          isLink={props.isLink}
        >
          {props.text}
        </LeftColumnContactsRowText>
      </div>
    );
}

function Contacts(props) {
  return (
    <div className="LeftColumn-contacts">
      <ContactsRow text={props.location} icon={iconLocation} />
      <ContactsRow text={props.link} icon={iconLink} isLink={true} />
      <ContactsRow text={props.joined} icon={iconJoined} />
    </div>
  );
}

function Button(props) {
  return <div className="LeftColumn-buttons-instance">{props.text}</div>;
}

function LeftColumn() {
  return (
    <div className="LeftColumn">
      <div className="LeftColumn-avatar">
        <img className="LeftColumn-avatar-image" src={avatar} alt="avatar" />
      </div>
      <Author name="Every Interaction" tick={true} />
      <AuthorShort name="@EveryInteract" follows="Follows you" />
      <Description text={descriptionText} />
      <Contacts
        location="London, UK"
        link="everyinteraction.com"
        joined="Joined May 2008"
      />
      <div className="LeftColumn-buttons">
        <Button text="Tweet to" />
        <Button text="Message" />
      </div>
    </div>
  );
}

const tabData = [
  ["Tweets", true],
  ["Tweets & replies", false],
  ["Media", false]
];

function TabNav(props) {
  if (props.active)
    return <div className="Middle-tab-nav-active">{props.text}</div>;
  else return <div className="Middle-tab-nav">{props.text}</div>;
}

function Tab(props) {
  return (
    <div className="Middle-tab">
      <TabNav text={tabData[0][0]} active={tabData[0][1]} />
      <TabNav text={tabData[1][0]} active={tabData[1][1]} />
      <TabNav text={tabData[2][0]} active={tabData[2][1]} />
    </div>
  );
}

const tweetData = [
  {
    isPinned: true,
    avatar: avatarMid,
    author: "Every Interaction",
    authorShort: "@EveryInteract",
    date: "2 Mar 2015",
    text:
      "We’ve made some more resources for all you wonderful <a href='#'>#design</a> folk <a href='http://everyinteraction.com/resources/'>everyinteraction.com/resources/</a> <a href='#'>#webdesign</a> <a href='#'>#UI</a>",
    isBig: true,
    image: process.env.PUBLIC_URL + "cover.png",
    comments: undefined,
    retweets: 17,
    loves: 47,
    isLoved: true
  },
  {
    isPinned: false,
    avatar: avatarMid,
    author: "Every Interaction",
    authorShort: "@EveryInteract",
    date: "23h",
    text:
      "Our new website concept; Taking you from… @ Every Interaction <a href='http://instagram.com/p/BNFGrfhBP3M/'>instagram.com/p/BNFGrfhBP3M/</a>",
    isBig: true,
    image: undefined,
    comments: 55,
    retweets: 12346,
    loves: 4,
    isLoved: false
  },
  {
    isPinned: false,
    avatar: avatarMid,
    author: "Every Interaction",
    authorShort: "@EveryInteract",
    date: "Nov 18",
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    isBig: false,
    image: process.env.PUBLIC_URL + "cover.png",
    comments: undefined,
    retweets: undefined,
    loves: undefined,
    isLoved: false
  }
];

function TweetLeft(props) {
  if (props.pinned)
    return (
      <div className="Middle-tweet-data-left">
        <img
          className="Middle-tweet-data-left-pinned"
          src={iconPinned}
          alt="iconPinned"
        />
        <img
          className="Middle-tweet-data-left-avatar"
          src={props.avatar}
          alt="avatarMid"
        />
      </div>
    );
  else
    return (
      <div className="Middle-tweet-data-left">
        <img
          className="Middle-tweet-data-left-avatar"
          src={props.avatar}
          alt="avatarMid"
        />
      </div>
    );
}

function TweetRightPinned(props) {
  if (props.pinned)
    return <div className="Middle-tweet-data-right-pinned">Pinned Tweet</div>;
  else return <div />;
}

function TweetRightAuthor(props) {
  return (
    <div className="Middle-tweet-data-right-author">
      <div className="Middle-tweet-data-right-author-text">{props.author}</div>
      <div className="Middle-tweet-data-right-author-short">
        {props.authorShort}
      </div>
      <div className="Middle-tweet-data-right-author-divider">•</div>
      <div className="Middle-tweet-data-right-author-date">{props.date}</div>
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
    <div className="Middle-tweet-data-right-actions-pair">
      <img
        className="Middle-tweet-data-right-actions-pair-icon"
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
    <div className="Middle-tweet-data-right-actions">
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
    <div className="Middle-tweet-data-right">
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
    <div className="Middle-tweet">
      <div className="Middle-tweet-line" />
      <div className="Middle-tweet-data">
        <TweetLeft
          pinned={props.data["isPinned"]}
          avatar={props.data["avatar"]}
        />
        <TweetRight data={props.data} />
      </div>
    </div>
  );
}

function Middle(props) {
  return (
    <div className="Middle">
      <Tab />
      <Tweet data={tweetData[0]} />
      <Tweet data={tweetData[1]} />
      <Tweet data={tweetData[2]} />
    </div>
  );
}

function Page(props) {
  return (
    <div className="Page">
      <Header />
      <Cover />
      <Statistics />
      <LeftColumn />
      <Middle />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="Desktop">
        <Helmet title="EveryInteract page" />
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
            <Route exact path="/EveryInteract" component={Page} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
