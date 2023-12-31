import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Authentication from "../functions/Authentication";
import CheckAuth from "../functions/CheckAuth";
import FacebookButton from "../functions/FacebookButton";

function Login({ setUser }) {
  const [userInput, setUserInput] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const Checker = async () => {
      if (await CheckAuth(setUser)) {
        nav("/Messaging");
      } else {
        nav("/");
      }
    };
    Checker();
  }, []);

  const Auth = async (e) => {
    e.preventDefault();

    if (await Authentication(userInput, setUser)) {
      return nav("/Messaging");
    }

    alert("Failed to logged in");
  };

  const input = (e) => {
    setUserInput((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="flex flex-col gap-2  w-[340px] h-[250px] rounded-md items-center ">
      <form onSubmit={Auth} className="flex flex-col gap-4 items-center">
        <input
          onChange={(e) => input(e)}
          name="username"
          required
          type="text"
          placeholder="Enter Username"
          className="LgnDesign"
        />
        <input
          onChange={(e) => input(e)}
          name="password"
          required
          type="password"
          placeholder="Enter Password"
          className="LgnDesign"
        />
        <button
          className="bg-blue-950 text-white p-2 w-full rounded-md select-none
       hover:bg-[#303c7f] hover:shadow-md hover:shadow-slate-500"
        >
          LOGIN
        </button>
      </form>
      <div className="">
        <Link
          to="/Login/ForgotPassword"
          className="hover:text-blue-500 hover:underline select-none cursor-pointer"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="">
        <FacebookButton />
      </div>
    </div>
  );
}

export default Login;
