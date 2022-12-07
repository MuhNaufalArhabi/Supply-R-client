import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket, handleShop, rooms , handleMessage}) => {

  return (
    <div className="chat__sidebar">
      <h4>User</h4>
      <div>
        <div className="chat__users mt-5">
          {rooms.map(room => {
            return localStorage.role === 'buyer' ? 
              <div 
              id="div-chat-bar"
              key={room.id}
                onClick={() => {
                  handleShop(room.ShopId);
                  handleMessage(room.id, room.Shop.name);
                }} style={{cursor: 'pointer'}}>
                
              <p>
                {room.Shop.name}
              </p>
              </div>
             : 
             <div key={room.id}
                onClick={() => {
                  handleShop(room.BuyerId);
                  handleMessage(room.id, room.Buyer.name);
                }} style={{cursor: 'pointer'}}>
              <p>
                {room.Buyer.name}
              </p>
             </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
