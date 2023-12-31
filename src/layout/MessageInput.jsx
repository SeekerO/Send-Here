import React, { useEffect, useState } from "react";
import supabase from "../config/SupabaseClient";
import { RiMailSendFill } from "react-icons/ri";
function MessageInput({ user, getUserInfo }) {
  const [message, setMessage] = useState();

  useEffect(() => {
    setMessage("");
  }, [getUserInfo]);

  const sendMessage = async () => {
    if (message.trim() !== "") {
      const response = await supabase
        .from("Messages")
        .insert([
          {
            MessageBy: user.username,
            Contactwith: getUserInfo.username,
            Message: message,
          },
        ])
        .select();

      setMessage("");
    } else {
      alert("Enter a message");
    }
  };

  return (
    <>
      <div className="p-2 flex items-center gap-1">
        <textarea
          required
          placeholder="Enter Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-1 text-[12px] outline-none rounded-md resize-none"
        />
        <a
          onClick={() => sendMessage()}
          className="h-[40px] w-[40px] rounded-full bg-[#303c7f] items-center flex justify-center
       hover:text-slate-100 cursor-pointer hover:shadow-md hover:shadow-slate-400"
        >
          <RiMailSendFill className="text-[20px]" />
        </a>
      </div>
    </>
  );
}

export default MessageInput;
