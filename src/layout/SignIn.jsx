import React, { useState } from "react";
import CreateAccounts from "../functions/CreateAccounts";
import { useNavigate } from "react-router-dom";
function SignIn({ setUser, setOpenSignUp }) {
  const [userInput, setUserInput] = useState();
  const nav = useNavigate();

  const SignUp = async (e) => {
    e.preventDefault();
    if (await CreateAccounts(setUser, userInput)) {
      nav("/");
      setUserInput();
      setOpenSignUp(true);
    }
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
      <form onSubmit={SignUp} className="flex flex-col gap-4 items-center">
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
        <input
          onChange={(e) => input(e)}
          name="repassword"
          required
          type="password"
          placeholder="Re-enter Password"
          className="LgnDesign"
        />
        <button
          className="bg-blue-950 text-white p-2 w-full rounded-md select-none
   hover:bg-[#303c7f] hover:shadow-md hover:shadow-[#303c7f]"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default SignIn;
