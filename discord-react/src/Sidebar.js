//React components
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Project Components
import SidebarChannel from "./SidebarChannel";
import { selectUser } from "./features/userSlice";

//Css files
import "./Sidebar.css";
//Icons
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  //For any change made in channels colllection
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
    return () => {};
  }, []);

  //Event for adding a new channel
  const handleAddChannel = () => {
    const channelName = prompt("Add a new channel name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  console.log(user, "This is user");
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Ritesh Naik</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        {/* Channel Header */}
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels </h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        {/* Channel List */}
        <div className="sidebar__channelsList">
          {channels.map(({id, channel}) => (
            <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
          ))}
        </div>
        {/* Channel Voice Status */}
        <div className="sidebar__voice">
          <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
          </div>
        </div>
        {/* Channel Profile */}
        <div className="sidebar__profile">
          <Avatar src={user.photo} />
          <div className="sidebar__profileInfo">
            <h3>#Ritesh_Naik</h3>
            <p># This is my id</p>
          </div>
          <div className="sidebar__profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
