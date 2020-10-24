 //React components
import React from "react";
//Project Components

//CSS files
import "./SidebarChannel.css";
//Icons


function SidebarChannel({ id, channelName }) {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>{channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
