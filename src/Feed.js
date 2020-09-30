import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import PostData from "./PostData";
import StoryReel from "./StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);

  // real-time connection to database
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "descending")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  });
  return (
    <div className="feed">
      <StoryReel />
      <Post />
      {posts.map((post) => (
        <PostData
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Feed;
