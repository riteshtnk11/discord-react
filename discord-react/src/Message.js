import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar src="https://avatars3.githubusercontent.com/u/57477426?s=460&u=920a9aa965297510d74cef93973710dc535892fc&v=4" />
      <div className="message__info">
        <h4>
          Ritesh Naik
          <span className="message__timestamp">timestamp</span>
        </h4>
        <p>This is new message for you!!!!!!!</p>
      </div>
    </div>
  );
}

export default Message;
