import React from "react";
import styled, { css } from "styled-components";

import avatar from "./avatar.svg";
import tick from "./tick.svg";
import iconLocation from "./icon-location.svg";
import iconLink from "./icon-link.svg";
import iconJoined from "./icon-joined.svg";
import { followersData } from "./Data";

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
      <div className="contacts-row">
        <img className="contacts-row-icon" src={props.icon} alt={props.icon} />
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
      <div followers={followersData} />
    </div>
  );
}
