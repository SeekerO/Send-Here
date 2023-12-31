import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AccountsFetcher from "../config/AccountsFetcher";
import AccountsConfig from "../config/AccountsConfig";
import MessageLayout from "./MessageLayout";
import Seetings from "./Seetings";
import { motion } from "framer-motion";

import { PiSlideshow } from "react-icons/pi";
import ContactsConfig from "../config/ContactsConfig";
function Messaging({ user }) {
  const [entry, setEntry] = useState(false);
  const [accounts_META_DATA, setAccounts] = useState([]);
  const [getUserInfo, setGetUserInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [openSettings, setOpenSettings] = useState(false);
  const [openConversationInformation, setOpenConversationInformation] =
    useState(false);
  const nav = useNavigate();

  const [sideBarExpand, setSideBarExpand] = useState(false);

  useEffect(() => {
    getAccounts();
    setTimeout(() => {
      setEntry(true);
    }, 2500);
  }, []);

  const getAccounts = async () => {
    setAccounts(await AccountsFetcher());
  };

  const Logout = () => {
    nav("/Login");
    window.localStorage.removeItem("key");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#535d98] via-[#303c7f] to-[#0b165a]">
      {!entry ? (
        <div className="h-full w-full items-center justify-center flex">
          SEND HERE
        </div>
      ) : (
        <div className="h-full w-full items-center justify-center flex select-none">
          <div
            className={`${
              sideBarExpand ? "w-[300px]  h-full" : "w-[50px] h-full"
            } flex flex-col duration-300`}
          >
            <div className="w-[50px] h-full flex">Other </div>

            <Seetings
              setOpenSettings={setOpenSettings}
              openSettings={openSettings}
              Logout={Logout}
            />

            <div
              className={`${
                sideBarExpand ? " h-[50px] px-2" : " flex-col h-[100px] "
              } flex items-center justify-between w-full duration-300 `}
            >
              <div className="flex items-center w-[80%]">
                <div
                  onClick={() => setOpenSettings(!openSettings)}
                  className="w-[40px] h-[40px] bg-black rounded-full cursor-pointer"
                ></div>
                {sideBarExpand && (
                  <motion.em
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className="text-white ml-2"
                  >
                    {user.username}
                  </motion.em>
                )}
              </div>

              <PiSlideshow
                onClick={() => setSideBarExpand(!sideBarExpand)}
                className="hover:bg-slate-300 hover:bg-opacity-30 text-white rounded-full w-[30px] h-[30px] p-1 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col w-[20%] h-screen">
            <div className=" bg-[#303c7f] h-full w-full">
              <div className="flex flex-col justify-center items-center h-[15%] gap-1">
                <h1 className="text-white font-white font-bold text-[20px]">
                  Messages
                </h1>

                <div className="flex justify-center w-[90%]">
                  <div className="w-full">
                    <input
                      type="search"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className=" w-full p-1 rounded-md text-center relative"
                    />
                    {search !== "" ? (
                      <div className="bg-white min-h-auto max-h-[200px] w-[274px] absolute overflow-y-auto rounded-b-md">
                        {accounts_META_DATA
                          ?.filter((item) => {
                            const searchTerm = search.toLowerCase();
                            const username = item.username.toLowerCase();

                            return searchTerm && username.includes(searchTerm);
                          })
                          .map((data, index) => (
                            <AccountsConfig
                              data={data}
                              key={index}
                              setGetUserInfo={setGetUserInfo}
                              setSearch={setSearch}
                            />
                          ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="h-[85%] overflow-y-auto w-full">
                {user?.contacts.map((data, index) => (
                  <ContactsConfig
                    key={index}
                    data={data}
                    setGetUserInfo={setGetUserInfo}
                  />
                ))}
              </div>

              {/* Contacts Display */}
            </div>
          </div>

          <div className="w-[80%] h-[100%] bg-[#00000078] flex">
            {getUserInfo.length !== 0 ? (
              <div className="w-full h-full bg-slate-300">
                <MessageLayout
                  getUserInfo={getUserInfo}
                  user={user}
                  setOpenConversationInformation={
                    setOpenConversationInformation
                  }

                  openConversationInformation={openConversationInformation}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                Select a chat
              </div>
            )}
          </div>

          {openConversationInformation && (
            <div className="w-[300px] h-full bg-slate-200">test</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Messaging;
