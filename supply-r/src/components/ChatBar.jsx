import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket, handleShop, rooms , handleMessage}) => {

  // const changeSoketId = (id) => {
  //   setrooms(id)
  // }
  // console.log(rooms)
  return (
    <div className="chat__sidebar">
      <h4>User</h4>
      <div>
        <div className="chat__users mt-5">
          {rooms.map(room => {
            return localStorage.role === 'buyer' ? 
              <p
                key={room.id}
                onClick={() => {
                  handleShop(room.ShopId);
                  handleMessage(room.id, room.Shop.name);
                }}>
                {room.Shop.name}
              </p>
             : 
              <p
                key={room.id}
                onClick={() => {
                  handleShop(room.BuyerId);
                  handleMessage(room.id, room.Buyer.name);
                }}>
                {room.Buyer.name}
              </p>
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
