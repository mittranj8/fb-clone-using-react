import React from "react";
import "./Feed.css";
import Post from "./Post";
import PostData from "./PostData";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <Post />
      <PostData
        profilePic="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p480x480/107542672_3068672666558069_5787317240187801863_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=ssbk47UKSyUAX9eajlL&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=fbbb5fed2ef6a72aa19f2efbad1f073c&oe=5F98A43E"
        message="My 1st Post"
        timestamp="5pm"
        username="Mittranj Pansuriya"
        image="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60"
      />
      <PostData
        profilePic="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p480x480/107542672_3068672666558069_5787317240187801863_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=ssbk47UKSyUAX9eajlL&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=fbbb5fed2ef6a72aa19f2efbad1f073c&oe=5F98A43E"
        message="My 1st Post"
        timestamp="5pm"
        username="Mittranj Pansuriya"
        image="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60"
      />
    </div>
  );
}

export default Feed;
