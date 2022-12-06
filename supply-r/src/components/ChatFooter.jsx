import React, { useState } from 'react';
import socket from '../stores/socket';

const ChatFooter = ({ receiverMsg }) => {
  const [message, setMessage] = useState('');
  // const handleTyping = () =>
  //   socket.emit('typing', `${localStorage.getItem('userName')} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('masuk sini')
    if (message.trim() && localStorage.getItem('id')) {
      console.log('masuk if footer')
      socket.emit('message', {
        chat: message,
        sender: localStorage.id, // user yang mengirim pesan
        receiver: receiverMsg,
        senderRole: localStorage.role,  // user yang menerima pesan, dipilih di chatbar
        name: localStorage.name,
        senderId: localStorage.id,
      });
    }
    console.log(message, localStorage.id, receiverMsg, localStorage.role, localStorage.name)
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // onKeyDown={handleTyping}
        />
        <button className="sendBtn" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
