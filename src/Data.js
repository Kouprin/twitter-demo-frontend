import iconHome from "./icon-home.svg";
import iconMoments from "./icon-moments.svg";
import iconNotifications from "./icon-notifications.svg";
import iconMessages from "./icon-messages.svg";

import avatarMid from "./avatar-mid.svg";

export const headerData = {
  home: { icon: iconHome, text: "Home" },
  moments: { icon: iconMoments, text: "Moments" },
  notifications: { icon: iconNotifications, text: "Notifications" },
  messages: { icon: iconMessages, text: "Messages" }
};

const checkActiveMain = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/EveryInteract";
};

const checkActiveFollowing = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/EveryInteract/following";
};

const checkActiveFollowers = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/EveryInteract/followers";
};

const checkActiveLikes = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/EveryInteract/likes";
};

const checkActiveLists = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/EveryInteract/lists";
};

export const statisticsData = {
  tweets: {
    text: "Tweets",
    count: "8,058",
    checkActive: checkActiveMain,
    whereTo: "/"
  },
  following: {
    text: "Following",
    count: "721",
    checkActive: checkActiveFollowing,
    whereTo: "following"
  },
  followers: {
    text: "Followers",
    count: "1,815",
    checkActive: checkActiveFollowers,
    whereTo: "followers"
  },
  likes: {
    text: "Likes",
    count: "460",
    checkActive: checkActiveLikes,
    whereTo: "likes"
  },
  lists: {
    text: "Lists",
    count: "2",
    checkActive: checkActiveLists,
    whereTo: "lists"
  }
};

export const tabData = {
  tweets: { text: "Tweets", is_active: true },
  replies: { text: "Tweets & replies", is_active: false },
  media: { text: "Media", is_active: false }
};

export const followersData = {
  count: 216,
  list: [
    { image: process.env.PUBLIC_URL + "follower.png", link: "test_test" },
    { image: process.env.PUBLIC_URL + "follower.png", link: "test_test_2" },
    { image: process.env.PUBLIC_URL + "follower.png", link: "test_test_3" },
    { image: process.env.PUBLIC_URL + "follower.png", link: "test_test_4" },
    { image: process.env.PUBLIC_URL + "follower.png", link: "test_test_5" },
    { image: process.env.PUBLIC_URL + "follower.png", link: "test_test_6" }
  ]
};

export const photoVideoData = {
  count: 522,
  list: [
    { image: process.env.PUBLIC_URL + "photo.png", link: "photo" },
    { image: process.env.PUBLIC_URL + "photo.png", link: "photo_2" },
    { image: process.env.PUBLIC_URL + "photo.png", link: "photo_3" },
    { image: process.env.PUBLIC_URL + "photo.png", link: "photo_4" },
    { image: process.env.PUBLIC_URL + "photo.png", link: "photo_5" }
  ]
};

export const followData = [
  {
    image: process.env.PUBLIC_URL + "follow.png",
    author: "AppleInsider",
    isVerified: false,
    authorShort: "@appleinsider"
  },
  {
    image: process.env.PUBLIC_URL + "follow.png",
    author: "Creocode",
    isVerified: true,
    authorShort: "@creocode"
  },
  {
    image: process.env.PUBLIC_URL + "follow.png",
    author: "Epiphany Search",
    isVerified: false,
    authorShort: "@Epiph…"
  }
];

export const trendsData = [
  {
    text: "#BringYourDogToWorkDay",
    tweets: undefined,
    description: undefined
  },
  {
    text: "#FridayFeeling",
    tweets: "12.1K",
    description: undefined
  },
  {
    text: "#Brexit",
    tweets: undefined,
    description: "It’s one year since the UK voted to leave the European Union"
  },
  {
    text: "HMS Queen Elizabeth",
    tweets: "1,036",
    description: undefined
  },
  {
    text: "Tweets and description together",
    tweets: "123K",
    description: "description seems logical"
  }
];

export const tweetData = [
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
