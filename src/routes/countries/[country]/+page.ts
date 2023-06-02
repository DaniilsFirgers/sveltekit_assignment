import axios from "axios";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }): Promise<Country> => {
  const country: string = params.country;
  const countries = await axios.get("/countries_info");
  const data: CountriesResponse = countries.data;
  const filteredCountry = data.countries.find(
    (el) => el.name.toLocaleLowerCase() === country
  );

  if (!filteredCountry) {
    throw error(404, {
      message: "Not found",
    });
  }
  return filteredCountry;
};
