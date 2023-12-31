import React from "react";
import supabase from "./SupabaseClient";
export default async function AccountsFetcher() {
  const { data: userAccounts } = await supabase.from("UserAccounts").select();
  return userAccounts;
}
