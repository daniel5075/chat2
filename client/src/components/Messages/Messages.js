import React from "react";
import ScrolltoBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import "./Messages.css";

const Messages = ({ messages, name }) => (
  <ScrolltoBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrolltoBottom>
);

export default Messages;
