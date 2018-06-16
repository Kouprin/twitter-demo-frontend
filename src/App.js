import React, { Component } from "react";
import styled, { css } from "styled-components";
import icon_home from "./icon_home.svg";
import icon_moments from "./icon_moments.svg";
import icon_notifications from "./icon_notifications.svg";
import icon_messages from "./icon_messages.svg";
import icon_twitter from "./icon_twitter.svg";
import rectangle from "./rectangle.svg";
import icon_magnifier from "./icon_magnifier.svg";
import avatar from "./avatar.svg";
import avatar_mid from "./avatar_mid.svg";
import avatar_small from "./avatar_small.svg";
import oval from "./oval.svg";
import tick from "./tick.svg";
import icon_location from "./icon_location.svg";
import icon_link from "./icon_link.svg";
import icon_joined from "./icon_joined.svg";
import icon_pinned from "./icon_pinned.svg";
import icon_comments from "./icon_comments.svg";
import icon_retweet from "./icon_retweet.svg";
import icon_loves from "./icon_loves.svg";
import icon_loved from "./icon_loved.svg";
import icon_envelope from "./icon_envelope.svg";
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
      <div className="Statistics-empty" />
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

const description_text =
  "UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.";

function Description(props) {
  return (
    <div className="LeftColumn-description">
      <div className="LeftColumn-description-text">{props.text}</div>
    </div>
  );
}

function ContactsRow(props) {
  if (props.text == undefined) return <div />;
  else
    return (
      <div className="LeftColumn-contacts-row">
        <img
          className="LeftColumn-contacts-row-icon"
          src={props.icon}
          alt={props.icon}
        />
        <div className="LeftColumn-contacts-row-text">{props.text}</div>
      </div>
    );
}

function Contacts(props) {
  return (
    <div className="LeftColumn-contacts">
      <ContactsRow text={props.location} icon={icon_location} />
      <ContactsRow text={props.link} icon={icon_link} />
      <ContactsRow text={props.joined} icon={icon_joined} />
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
      <Description text={description_text} />
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

const tab_data = [
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
      <TabNav text={tab_data[0][0]} active={tab_data[0][1]} />
      <TabNav text={tab_data[1][0]} active={tab_data[1][1]} />
      <TabNav text={tab_data[2][0]} active={tab_data[2][1]} />
    </div>
  );
}

// tweet_data:
// 0. is pinned, boolean
// 1. avatar, obj
// 2. author, string
// 3. author short, string
// 4. date, string
// 5. text content, string
// 6. is font large, boolean
// 7. image, string
// 8. comments, int
// 9. retweets, int
// 10. loves, int
// 11. is loved, boolean

const tweet_data = [
  [
    true,
    avatar_mid,
    "Every Interaction",
    "@EveryInteract",
    "• 2 Mar 2015",
    "We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
    true,
    process.env.PUBLIC_URL + "cover.png",
    undefined,
    17,
    47,
    true
  ],
  [
    false,
    avatar_mid,
    "Every Interaction",
    "@EveryInteract",
    "• 23h",
    "Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
    true,
    undefined,
    55,
    12345,
    4,
    false
  ],
  [
    false,
    avatar_mid,
    "Every Interaction",
    "@EveryInteract",
    "• Nov 18",
    "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    false,
    process.env.PUBLIC_URL + "cover.png",
    undefined,
    undefined,
    undefined,
    false
  ]
];

function TweetLeft(props) {
  if (props.pinned)
    return (
      <div className="Middle-tweet-data-left">
        <img
          className="Middle-tweet-data-left-pinned"
          src={icon_pinned}
          alt="icon_pinned"
        />
        <img
          className="Middle-tweet-data-left-avatar"
          src={props.avatar}
          alt="avatar_mid"
        />
      </div>
    );
  else
    return (
      <div className="Middle-tweet-data-left">
        <img
          className="Middle-tweet-data-left-avatar"
          src={props.avatar}
          alt="avatar_mid"
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
        {props.author_short}
      </div>
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
    props.is_loved &&
    css`
      color: #e2264d;
    `};
`;

function TweetRightActionPair(props) {
  return (
    <div className="Middle-tweet-data-right-actions-pair">
      <img
        className="Middle-tweet-data-right-actions-pair-icon"
        src={props.is_loved ? icon_loved : props.icon}
        alt={props.icon}
      />
      <TweetRightActionsPairNumber is_loved={props.is_loved}>
        {props.number}
      </TweetRightActionsPairNumber>
    </div>
  );
}

function TweetRightActions(props) {
  return (
    <div className="Middle-tweet-data-right-actions">
      <TweetRightActionPair icon={icon_comments} number={props.comments} />
      <TweetRightActionPair icon={icon_retweet} number={props.retweets} />
      <TweetRightActionPair
        icon={icon_loves}
        number={props.loves}
        is_loved={props.is_loved}
      />
      <TweetRightActionPair icon={icon_envelope} />
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
      <TweetRightPinned pinned={props.data[0]} />
      <TweetRightAuthor
        author={props.data[2]}
        author_short={props.data[3]}
        date={props.data[4]}
      />
      <TweetRightText big={props.data[6]}>{props.data[5]}</TweetRightText>
      {props.data[7] ? <TweetRightImage src={props.data[7]} /> : <div />}
      <TweetRightActions
        comments={props.data[8]}
        retweets={props.data[9]}
        loves={props.data[10]}
        is_loved={props.data[11]}
      />
    </div>
  );
}

function Tweet(props) {
  return (
    <div className="Middle-tweet">
      <div className="Middle-tweet-line" />
      <div className="Middle-tweet-data">
        <TweetLeft pinned={props.data[0]} avatar={props.data[1]} />
        <TweetRight data={props.data} />
      </div>
    </div>
  );
}

function Middle(props) {
  return (
    <div className="Middle">
      <Tab />
      <Tweet data={tweet_data[0]} />
      <Tweet data={tweet_data[1]} />
      <Tweet data={tweet_data[2]} />
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
        <Middle />
      </div>
    );
  }
}

export default App;
