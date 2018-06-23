import React from "react";
import styled, { css } from "styled-components";

import avatar from "./avatar.svg";
import tick from "./tick.svg";
import iconLocation from "./icon-location.svg";
import iconLink from "./icon-link.svg";
import iconJoined from "./icon-joined.svg";
import iconFollowers from "./icon-followers.svg";
import iconPhotoVideo from "./icon-photo-video.svg";
import { followersData, photoVideoData } from "./Data";

import "./LeftColumn.css";

function Author(props) {
  if (props.tick)
    return (
      <div className="author">
        <div className="author-name">{props.name}</div>
        <img className="author-tick" src={tick} alt="tick" />
      </div>
    );
  else
    return (
      <div className="author">
        <div className="author-name">{props.name}</div>
      </div>
    );
}

function AuthorShort(props) {
  return (
    <div className="authorShort">
      <div className="authorShort-name">{props.name}</div>
      <div className="authorShort-follows">{props.follows}</div>
    </div>
  );
}

const descriptionText =
  "UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.";

function Description(props) {
  return (
    <div className="description">
      <div className="description-text">{props.text}</div>
    </div>
  );
}

const RowText = styled.a`
  margin-left: 10px;
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
      <div className="contacts-row">
        <img className="contacts-row-icon" src={props.icon} alt={props.icon} />
        <RowText
          href={props.isLink ? "http://" + props.text : undefined}
          isLink={props.isLink}
        >
          {props.text}
        </RowText>
      </div>
    );
}

function Contacts(props) {
  return (
    <div className="contacts">
      <ContactsRow text={props.location} icon={iconLocation} />
      <ContactsRow text={props.link} icon={iconLink} isLink={true} />
      <ContactsRow text={props.joined} icon={iconJoined} />
    </div>
  );
}

function Button(props) {
  return <div className="buttons-instance">{props.text}</div>;
}

function Follower(props) {
  return (
    <div className="followers-list-follower">
      <img
        className="followers-list-follower-image"
        src={props.image}
        alt={props.link}
      />
    </div>
  );
}

function FollowerList(props) {
  return (
    <div className="followers-list">
      <Follower
        image={props.followers[0]["image"]}
        link={props.followers[0]["link"]}
      />
      <Follower
        image={props.followers[1]["image"]}
        link={props.followers[1]["link"]}
      />
      <Follower
        image={props.followers[2]["image"]}
        link={props.followers[2]["link"]}
      />
      <Follower
        image={props.followers[3]["image"]}
        link={props.followers[3]["link"]}
      />
      <Follower
        image={props.followers[4]["image"]}
        link={props.followers[4]["link"]}
      />
      <Follower
        image={props.followers[5]["image"]}
        link={props.followers[5]["link"]}
      />
    </div>
  );
}

function Followers(props) {
  return (
    <div className="followers">
      <div className="followers-header">
        <img
          className="followers-header-image"
          src={iconFollowers}
          alt={iconFollowers}
        />
        <RowText href={"go_followers"} isLink={true}>
          {props.followers["count"]} Followers you know
        </RowText>
      </div>
      <FollowerList followers={props.followers["list"]} />
    </div>
  );
}

function PhotoVideo(props) {
  return (
    <div className="photovideos-list-photovid">
      <img
        className="photovideos-list-photovid-image"
        src={props.image}
        alt={props.link}
      />
    </div>
  );
}

function PhotoVideoList(props) {
  return (
    <div className="photovideos-list">
      <PhotoVideo
        image={props.photoVideos[0]["image"]}
        link={props.photoVideos[0]["link"]}
      />
      <PhotoVideo
        image={props.photoVideos[1]["image"]}
        link={props.photoVideos[1]["link"]}
      />
      <PhotoVideo
        image={props.photoVideos[2]["image"]}
        link={props.photoVideos[2]["link"]}
      />
      <PhotoVideo
        image={props.photoVideos[3]["image"]}
        link={props.photoVideos[3]["link"]}
      />
      <PhotoVideo
        image={props.photoVideos[4]["image"]}
        link={props.photoVideos[4]["link"]}
      />
    </div>
  );
}

function PhotoVideos(props) {
  return (
    <div className="photovideos">
      <div className="photovideos-header">
        <img
          className="photovideos-header-image"
          src={iconPhotoVideo}
          alt={iconPhotoVideo}
        />
        <RowText href={"go_photovideos"} isLink={true}>
          {props.photoVideos["count"]} Photos and videos
        </RowText>
      </div>
      <PhotoVideoList photoVideos={props.photoVideos["list"]} />
    </div>
  );
}

export function LeftColumn() {
  return (
    <div className="LeftColumn">
      <div className="avatar">
        <img className="avatar-image" src={avatar} alt="avatar" />
      </div>
      <Author name="Every Interaction" tick={true} />
      <AuthorShort name="@EveryInteract" follows="Follows you" />
      <Description text={descriptionText} />
      <Contacts
        location="London, UK"
        link="everyinteraction.com"
        joined="Joined May 2008"
      />
      <div className="buttons">
        <Button text="Tweet to" />
        <Button text="Message" />
      </div>
      <Followers followers={followersData} />
      <PhotoVideos photoVideos={photoVideoData} />
    </div>
  );
}
