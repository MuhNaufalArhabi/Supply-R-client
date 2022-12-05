import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket, handleShop }) => {
  const [rooms, setrooms] = useState(0);

  const changeSoketId = (id) => {
    setrooms(id)
  }
  useEffect(() => {
    socket.on('newRoomResponse', (data) => {
      /**
       * 
       */
      setrooms(data);
    });
  }, [socket, rooms]);

  // console.log(person, 'ini users');
  return (
    <div className="chat__sidebar">
      <h4>User</h4>
      <div>
        <div className="chat__users">
          {rooms.map((room, index) =>
            localStorage.role === 'buyer' ? (
              <p
                key={room.id}
                onClick={() => {
                }}>
                {room.Shop.name}
              </p>
            ) : (
              <p
                key={room.id}
                onClick={() => {
                }}>
                {room.Buyer.name}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
