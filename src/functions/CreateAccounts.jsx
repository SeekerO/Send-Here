import React from "react";
import supabase from "../config/SupabaseClient";
import { v4 as uuidv4 } from "uuid";

export default async function CreateAccounts(setUser, userInput) {
  var uuid = uuidv4();

  if (userInput.password === userInput.repassword) {
    const { error } = await supabase.from("UserAccounts").insert([
      {
        username: userInput.username,
        password: userInput.password,
        uuid: uuid,
      },
    ]);
    if (error) {
      alert("Something wen't wrong please try again");
      return false;
    }

    return true;
  } else {
    alert("Password doesn't match");
  }
}
