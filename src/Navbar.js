import React from "react";
import "./Navbar.css";
import {
  Search,
  Home,
  Flag,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
  Forum,
  ExpandMore,
  Add,
  NotificationsActive,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function Navbar() {
  return (
    <div className="navbar">
      {/* Navbar left section */}
      <div className="navbar_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1920px-Facebook_f_logo_%282019%29.svg.png"
          alt="fb logo"
        />
        <div className="navbar_search">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Navbar middle section */}
      <div className="navbar_menu">
        <div className="navbar_menu_option navbar_menu_option--active">
          <Home fontSize="large" />
        </div>
        <div className="navbar_menu_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="navbar_menu_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
        <div className="navbar_menu_option">
          <Flag fontSize="large" />
        </div>
        <div className="navbar_menu_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
      </div>

      {/* Navbar right section */}
      <div className="navbar_profile">
        <div className="navbar_profile_av">
          <Avatar />
          <h4>Mittranj Pansuriya</h4>
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <Forum />
          </IconButton>
          <IconButton>
            <NotificationsActive />
          </IconButton>
          <IconButton>
            <ExpandMore />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
