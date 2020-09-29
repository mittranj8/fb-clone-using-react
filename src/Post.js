import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import "./Post.css";

function Post() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // db code here
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p480x480/107542672_3068672666558069_5787317240187801863_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=ssbk47UKSyUAX9eajlL&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=fbbb5fed2ef6a72aa19f2efbad1f073c&oe=5F98A43E" />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`What's on your mind?`}
            className="post_input"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder={`Image URL (Optional)`}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="post_bottom">
        <div className="post_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="post_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="post_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
