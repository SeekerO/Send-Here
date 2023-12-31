import React from "react";

function ContactsConfig({ data, setGetUserInfo }) {
  return (
    <div
      onClick={() => setGetUserInfo(data)}
      className="flex items-center p-1 gap-1 bg-slate-300 w-full hover:border-2 hover:border-blue-400 cursor-pointer"
    >
      <div className="w-[45px] h-[40px] bg-slate-500 rounded-full" />
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full items-center ">
          <label>{data.username}</label>
          <label className="font-thin text-[12px]">10:09pm</label>
        </div>
        <p className="font-thin text-[14px] text-nowrap truncate ... w-[250px]">
          User: This is the sageasdadadsadsadsasdasdsageasdadadsadsadsasdasd
        </p>
      </div>
    </div>
  );
}

export default ContactsConfig;
