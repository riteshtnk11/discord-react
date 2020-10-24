//React components
import React from "react";
//Project Components
import ChatHeader from "./ChatHeader";
import Message from "./Message.js";
//CSS files
import "./Chat.css";
//Icons
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";


function Chat() {
  return (
    <div className="chat">
      {/* Chat header Component */}
      <ChatHeader />
      {/* Chat Messages */}
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      {/* Chat Send message */}
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />                                                       
        {/* Input form */}
        <form>
          <input placeholder='Message #Testchannel' />
          <button className="chat__inputName" type="submit">
            Send Message
          </button>
        </form>
        {/* Input icons */}
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
