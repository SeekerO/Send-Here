import React from "react";
import { TbDotsCircleHorizontal } from "react-icons/tb";

function MessageHeaderDisplay({
  getUserInfo,
  setOpenConversationInformation,
  openConversationInformation,
}) {
  const onClickName = () => {
    setOpenConversationInformation(!openConversationInformation);
  };
  return (
    <div className="flex items-center justify-between bg-[#303c7f] p-1 text-white ">
      <div className="flex gap-1 p-1 items-center">
        <div className="w-[40px] h-[40px] bg-white rounded-full " />
        {getUserInfo.username}
      </div>
      <div className="hover:text-blue-400 cursor-pointer">
        <a onClick={() => onClickName()}>
          <TbDotsCircleHorizontal className="text-[25px]" />
        </a>
      </div>
    </div>
  );
}

export default MessageHeaderDisplay;
