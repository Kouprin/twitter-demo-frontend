import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import avatar from "./avatar.svg";
import tick from "./tick.svg";
import iconLocation from "./icon-location.svg";
import iconLink from "./icon-link.svg";
import iconJoined from "./icon-joined.svg";
import iconFollowers from "./icon-followers.svg";
import iconPhotoVideo from "./icon-photo-video.svg";
import { followersData, photoVideoData, descriptionTextData } from "./Data";

import "./LeftColumn.css";

function Author(props) {
  return (
    <div className="author">
      <Link className="author-name" to="#">
        {props.name}
      </Link>
      {props.tick ? (
        <img className="author-tick" src={tick} alt="tick" />
      ) : (
        <div />
      )}
    </div>
  );
}

function AuthorShort(props) {
  return (
    <div className="authorShort">
      <Link className="authorShort-name" to="#">
        {props.name}
      </Link>
      <div className="authorShort-follows">{props.follows}</div>
    </div>
  );
}

function Description(props) {
  return (
    <div className="description">
      <div className="description-text">{props.text}</div>
    </div>
  );
}

const RowText = styled.div`
  margin-left: 10px;
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 0.01px;
`;

function ContactsRow(props) {
  if (props.text === undefined) return <div />;
  else
    return (
      <div className="contacts-row">
        <img className="contacts-row-icon" src={props.icon} alt={props.icon} />
        {props.isLink ? (
          <Link to={props.text}>
            <RowText isLink={true}>{props.text}</RowText>
          </Link>
        ) : (
          <RowText isLink={false}>{props.text}</RowText>
        )}
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

const Button = styled.button`
  background: #e69600;
  box-shadow: none;
  cursor: pointer;
  color: #ffffff;
  border-radius: 100px;
  font-family: HelveticaNeue;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.01px;
  width: 128px;
  height: 40px;
  font-weight: 600;
  padding: 12px;

  &:hover {
    background: #cc8500;
  }
`;

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
      {props.followers.map(follower => (
        <Follower image={follower["image"]} link={follower["link"]} />
      ))}
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
        <Link to="/followers">
          <RowText isLink={true}>
            {props.followers["count"]} Followers you know
          </RowText>
        </Link>
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
      {props.photoVideos.map(photoVideo => (
        <PhotoVideo image={photoVideo["image"]} link={photoVideo["link"]} />
      ))}
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
        <Link to="/media">
          <RowText isLink={true}>
            {props.photoVideos["count"]} Photos and videos
          </RowText>
        </Link>
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
      <Description text={descriptionTextData} />
      <Contacts
        location="London, UK"
        link="everyinteraction.com"
        joined="Joined May 2008"
      />
      <div className="buttons">
        <Button>Tweet to</Button>
        <Button>Message</Button>
      </div>
      <Followers followers={followersData} />
      <PhotoVideos photoVideos={photoVideoData} />
    </div>
  );
}
