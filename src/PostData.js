import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubble,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import "./PostData.css";

function PostData({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="postData">
      <div className="postData_top">
        <Avatar src={profilePic} className="postData_avatar" />
        <div className="postData_topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          {/* <p>Timestamp..</p> */}
        </div>
      </div>

      <div className="postData_bottom">
        <p>{message}</p>
      </div>

      <div className="postData_image">
        <img src={image} alt="post_image" />
      </div>

      <div className="postData_options">
        <div className="postData_option">
          <ThumbUp />
          <p>Like</p>
        </div>

        <div className="postData_option">
          <ChatBubble />
          <p>Comment</p>
        </div>

        <div className="postData_option">
          <NearMe />
          <p>Share</p>
        </div>

        <div className="postData_option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default PostData;
