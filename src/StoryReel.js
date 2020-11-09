import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import DyttoProfile from "./images/DyttoProfileImg.jpg";
import DyttoStory from "./images/DyttoStory.jpg";
import BebeProfile from "./images/BebeProfileImg.jpg";
import BebeStory from "./images/BebeStory.jpg";
import TomLandProfile from "./images/TomLandProfileImg.jpg";
import TomLandStory from "./images/TomLandStory.jpg";
import EmeraudeProfile from "./images/EmeraudeProfileImg.jpg";
import EmeraudeStory from "./images/EmeraudeStory.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={DyttoStory} profileSrc={DyttoProfile} title="Dytto" />
      <Story image={BebeStory} profileSrc={BebeProfile} title="Bebe Rexha" />
      <Story
        image={TomLandStory}
        profileSrc={TomLandProfile}
        title="Tomorrow Land"
      />
      <Story
        image={EmeraudeStory}
        profileSrc={EmeraudeProfile}
        title="Emeraude Toubia"
      />
    </div>
  );
}

export default StoryReel;
