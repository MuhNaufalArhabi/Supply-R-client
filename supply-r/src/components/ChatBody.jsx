import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();



  return (
    <>
      <header className="chat__mainHeader">
      <h4>Direct Message</h4>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
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
