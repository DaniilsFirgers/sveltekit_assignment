<script lang="ts" setup>
  import CountryCard from "../../components/country-card.svelte";
  import { countriesStore } from "../../stores/countries";

  let countries_list = getCountriesData();

  async function getCountriesData() {
    const res = await $countriesStore;
    return res.countries;
  }
  getCountriesData();
</script>

<main class="flex justify-center items-center">
  {#await countries_list}
    <h1>Waiting for countries data...</h1>
  {:then countries}
    <div class="flex justify-center items-center grid grid-cols-2 gap-10 p-2">
      {#each countries as country}
        <CountryCard countryName={country.name} imgUrl={country.flag_url} />
      {/each}
    </div>
  {/await}
</main>
