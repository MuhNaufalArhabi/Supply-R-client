import React, { useState } from 'react';

const ChatFooter = ({ socket, currentSocketId }) => {
  const [message, setMessage] = useState('');
  const handleTyping = () =>
    socket.emit('typing', `${localStorage.getItem('userName')} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(currentSocketId);
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit(
        'message'
        // {
        // chat: message,
        // pengirimId: `${user.id}`, // user yang mengirim pesan
        // penerimaId: `${currentSocketId}`, // user yang menerima pesan, dipilih di chatbar
        // }
      );
    }
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
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
