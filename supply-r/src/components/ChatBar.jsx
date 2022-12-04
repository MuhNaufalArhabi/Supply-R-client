import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket, changeSoketId, person }) => {
  const [users, setUsers] = useState([]);
    useEffect(() => {
     socket.on('newUserResponse', (data) => {
      console.log(data);
        setUsers(data)
    });
    }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h4>User</h4>
      <div>
        <div className="chat__users">
          {users.map((user, index) => (
            <p
              key={index + 1}
              onClick={() => {
                changeSoketId(user.id);
              }}>
              {user.user}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
