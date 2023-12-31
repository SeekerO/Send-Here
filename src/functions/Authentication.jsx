import { v4 as uuidv4 } from "uuid";
import supabase from "../config/SupabaseClient";
import AccountsFetcher from "../config/AccountsFetcher";

export default async function Authentication(userInput, setUser) {
  // return true if user is authenticated else return false

  var uuid = uuidv4();

  var user_META_DATA = await AccountsFetcher();

  for (let index = 0; index < user_META_DATA?.length; index++) {
    if (
      user_META_DATA[index].username === userInput.username &&
      user_META_DATA[index].password === userInput.password
    ) {
      setUser(user_META_DATA[index]);
      await supabase
        .from("UserAccounts")
        .update({ uuid: uuid })
        .match({ id: user_META_DATA[index].id });
      window.localStorage.setItem("key", uuid);
      return true;
    }
  }
}
