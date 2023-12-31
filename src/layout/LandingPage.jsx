import React, { useEffect, useState } from "react";
import Login from "./Login";
import { motion } from "framer-motion";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import SignIn from "./SignIn";

function LandingPage({ setUser }) {
  const [open_signup, setOpenSignUp] = useState(true);

  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        duration: 1.5,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: {
      fontSize: "12px",
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#535d98] via-[#303c7f] to-[#0b165a]">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex h-full w-full justify-center items-center "
      >
        <div className="w-[650px] h-[60vh] bg-[#0b165a]  rounded-l-md ">
          {open_signup ? (
            <div className="items-center justify-center flex h-full w-full text-[30px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white font-bold "
              >
                WELCOME TO SEND-HERE
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="divCenter text-[25px] font-bold text-white uppercase"
            >
              Sign up and you are good to go!
            </motion.div>
          )}
        </div>
        <div className="w-[650px] h-[60vh] bg-[#535d98]  flex flex-col rounded-r-md">
          {open_signup ? (
            <div className="h-full w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex justify-end"
              >
                <a
                  onClick={() => setOpenSignUp(!open_signup)}
                  className=" p-1 flex items-center h-full select-none cursor-pointer"
                >
                  <MdKeyboardDoubleArrowLeft className="text-[20px]" />
                  Sign-up
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="items-center justify-center h-full w-full flex"
              >
                <Login setUser={setUser} />
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="h-full w-full"
            >
              <div className="flex justify-end">
                <a
                  onClick={() => setOpenSignUp(!open_signup)}
                  className=" p-1 flex items-center h-full select-none cursor-pointer text-white"
                >
                  Login
                  <MdKeyboardDoubleArrowRight className="text-[20px]" />
                </a>
              </div>

              <div className="divCenter flex">
                <SignIn setUser={setUser} setOpenSignUp={setOpenSignUp} />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
{
}
