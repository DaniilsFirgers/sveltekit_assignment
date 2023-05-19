import axios from "axios";
import type { PageLoad } from "./$types";
import { countriesStore } from "../../../stores/countries";

export const load: PageLoad = async ({ params }): Promise<any> => {
  const country: string = params.country;

  const countries = await axios.get("/static/countries/data.json");

  console.log(countries.data);

  //   return user;
};
