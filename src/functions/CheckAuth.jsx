import React from "react";
import AccountsFetcher from "../config/AccountsFetcher";

export default async function CheckAuth(setUser) {
  var user_META_DATA = await AccountsFetcher();

  for (let index = 0; index < user_META_DATA?.length; index++) {
    if (user_META_DATA[index].uuid === window.localStorage.getItem("key")) {
      setUser(user_META_DATA[index]);
      return true;
    }
  }
  return false;
}
