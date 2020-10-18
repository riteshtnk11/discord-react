//React components
import React from "react";
//Project Components

//CSS files
import "./ChatHeader.css";
//Icons
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function ChatHeader() {
  return (
    <div className="chatHeader">
      {/* Chat Header Left Side */}
      <div className="chatHeader__Left">
        <h3>
          <span className="chatHeader__hash">#</span>Channel Name
        </h3>
      </div>
      {/* Chat Header Right Side */}
      <div className="chatHeader__Right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeHolder="Search" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
