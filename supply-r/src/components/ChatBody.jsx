import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef, name }) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="chat__mainHeader">
        <h4>Direct Message</h4>
      </header>

      <div className="message__container">
        {messages.map((message, idx)  =>
          message.senderId == localStorage.id ? (
            <div className="message__chats" key={idx + 1}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.chat}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={idx + 1}>
              <p>{name}</p>
              <div className="message__recipient">
                <p>{message.chat}</p>
              </div>
            </div>
          )
        )}

        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
