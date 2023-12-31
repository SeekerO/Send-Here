import React, { useState } from "react";
import MessageUserDisplay from "./MessageUserDisplay";
import MessageInput from "./MessageInput";
import MessageHeaderDisplay from "./MessageHeaderDisplay";

function MessageLayout({
  getUserInfo,
  user,
  setOpenConversationInformation,
  openConversationInformation,
}) {
  return (
    <div className="h-full w-full flex flex-col">
      <MessageHeaderDisplay
        getUserInfo={getUserInfo}
        setOpenConversationInformation={setOpenConversationInformation}
        openConversationInformation={openConversationInformation}
      />
      <MessageUserDisplay getUserInfo={getUserInfo} user={user} />
      <MessageInput getUserInfo={getUserInfo} user={user} />
    </div>
  );
}

export default MessageLayout;
