import React, { Component } from "react";
import styled, { css } from "styled-components";
import icon_home from "./icon_home.svg";
import icon_moments from "./icon_moments.svg";
import icon_notifications from "./icon_notifications.svg";
import icon_messages from "./icon_messages.svg";
import icon_twitter from "./icon_twitter.svg";
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

const header_data = {
  home: { icon: icon_home, text: "Home" },
  moments: { icon: icon_moments, text: "Moments" },
  notifications: { icon: icon_notifications, text: "Notifications" },
  messages: { icon: icon_messages, text: "Messages" }
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
          src={header_data["home"]["icon"]}
          text={header_data["home"]["text"]}
        />
        <HeaderNavPair
          src={header_data["moments"]["icon"]}
          text={header_data["moments"]["text"]}
        />
        <HeaderNavPair
          src={header_data["notifications"]["icon"]}
          text={header_data["notifications"]["text"]}
        />
        <HeaderNavPair
          src={header_data["messages"]["icon"]}
          text={header_data["messages"]["text"]}
        />
      </div>
      <a href="http://twitter.com">
        <HeaderTwitter src={icon_twitter} alt="icon_twitter" />
      </a>

      <div className="Header-menu">
        <div className="Header-menu-search">
          <div className="Header-menu-search-text">Search Twitter</div>
          <img
            className="Header-menu-search-magnifier"
            src={icon_magnifier}
            alt="icon_magnifier"
          />
        </div>
        <HeaderMenuAvatar src={avatar_small} alt="avatar_small" />
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

const statistics_data = {
  tweets: { text: "Tweets", count: "8,058", is_active: true },
  following: { text: "Following", count: "721", is_active: false },
  followers: { text: "Followers", count: "1,815", is_active: false },
  likes: { text: "Likes", count: "460", is_active: false },
  lists: { text: "Lists", count: "2", is_active: false }
};

function Statistics() {
  return (
    <div className="Statistics">
      <div className="Statistics-empty" />
      <div className="Statistics-nav">
        <StatisticsNavPair
          text={statistics_data["tweets"]["text"]}
          count={statistics_data["tweets"]["count"]}
          active={statistics_data["tweets"]["is_active"]}
        />
        <StatisticsNavPair
          text={statistics_data["following"]["text"]}
          count={statistics_data["following"]["count"]}
          active={statistics_data["following"]["is_active"]}
        />
        <StatisticsNavPair
          text={statistics_data["followers"]["text"]}
          count={statistics_data["followers"]["count"]}
          active={statistics_data["followers"]["is_active"]}
        />
        <StatisticsNavPair
          text={statistics_data["likes"]["text"]}
          count={statistics_data["likes"]["count"]}
          active={statistics_data["likes"]["is_active"]}
        />
        <StatisticsNavPair
          text={statistics_data["lists"]["text"]}
          count={statistics_data["lists"]["count"]}
          active={statistics_data["lists"]["is_active"]}
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

const LeftColumnContactsRowText = styled.a`
  margin-left: 16px;
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 0.01px;

  color: #657786;
  ${props =>
    props.is_link &&
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
          href={props.is_link ? "http://" + props.text : undefined}
          is_link={props.is_link}
        >
          {props.text}
        </LeftColumnContactsRowText>
      </div>
    );
}

function Contacts(props) {
  return (
    <div className="LeftColumn-contacts">
      <ContactsRow text={props.location} icon={icon_location} />
      <ContactsRow text={props.link} icon={icon_link} is_link={true} />
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

const tweet_data = [
  {
    is_pinned: true,
    avatar: avatar_mid,
    author: "Every Interaction",
    author_short: "@EveryInteract",
    date: "2 Mar 2015",
    text:
      "We’ve made some more resources for all you wonderful <a href='#'>#design</a> folk <a href='http://everyinteraction.com/resources/'>everyinteraction.com/resources/</a> <a href='#'>#webdesign</a> <a href='#'>#UI</a>",
    is_big: true,
    image: process.env.PUBLIC_URL + "cover.png",
    comments: undefined,
    retweets: 17,
    loves: 47,
    is_loved: true
  },
  {
    is_pinned: false,
    avatar: avatar_mid,
    author: "Every Interaction",
    author_short: "@EveryInteract",
    date: "23h",
    text:
      "Our new website concept; Taking you from… @ Every Interaction <a href='http://instagram.com/p/BNFGrfhBP3M/'>instagram.com/p/BNFGrfhBP3M/</a>",
    is_big: true,
    image: undefined,
    comments: 55,
    retweets: 12346,
    loves: 4,
    is_loved: false
  },
  {
    is_pinned: false,
    avatar: avatar_mid,
    author: "Every Interaction",
    author_short: "@EveryInteract",
    date: "Nov 18",
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    is_big: false,
    image: process.env.PUBLIC_URL + "cover.png",
    comments: undefined,
    retweets: undefined,
    loves: undefined,
    is_loved: false
  }
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
      <TweetRightPinned pinned={props.data["is_pinned"]} />
      <TweetRightAuthor
        author={props.data["author"]}
        author_short={props.data["author_short"]}
        date={props.data["date"]}
      />
      <TweetRightText
        big={props.data["is_big"]}
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
        is_loved={props.data["is_loved"]}
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
          pinned={props.data["is_pinned"]}
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
