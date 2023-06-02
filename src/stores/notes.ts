import { writable } from "svelte/store";
import axios from "axios";
import { goto } from "$app/navigation";

async function initialize(): Promise<any> {
  try {
    const res = await axios.get("/notes_data");
    const statusCode = res.status;
    if (statusCode === 200) {
      return res.data;
    }
  } catch (err) {
    return {};
  }
}

export const notesStore = writable(initialize());
