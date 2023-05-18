import { writable } from "svelte/store";
import axios from "axios";
import { goto } from "$app/navigation";

async function initialize(): Promise<any> {
  try {
    const res = await axios.get("/countries_data/data.json");
    const statusCode = res.status;
    if (statusCode === 200) {
      console.log("heh", res.data);
      return res.data;
    }
  } catch (err) {
    return {};
  }
}

export const countriesStore = writable(initialize());
