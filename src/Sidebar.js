import {
  Chat,
  EmojiFlags,
  ExpandMore,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p480x480/107542672_3068672666558069_5787317240187801863_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=ssbk47UKSyUAX9eajlL&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=fbbb5fed2ef6a72aa19f2efbad1f073c&oe=5F98A43E"
        title="Mittranj Pansuriya"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore} title="See More" />
    </div>
  );
}

export default Sidebar;
