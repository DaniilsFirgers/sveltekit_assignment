// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  type CountriesResponse = {
    countries: Country[];
  };

  type Country = {
    name: string;
    capital: string;
    flag_url: string;
    population: number;
    sightseeing_places: SightseeingPlace[];
  };

  type SightseeingPlace = {
    name: string;
    picture_url: string;
    description: string;
  };
}

export {};
