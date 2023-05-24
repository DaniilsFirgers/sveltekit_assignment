<script lang="ts" setup>
  export let data;
  let country = data;
  const numberFormat = (x: number) => {
    return x.toString().replace(/(.{4})/g, "$1 ");
  };
</script>

<main>
  <div class="flex justify-center items-center h-fit">
    <img src={country.flag_url} alt="" class="h-20 w-40 rounded-lg" />
  </div>
  <div class="pt-10 flex gap-10 justify-center items-center">
    <h1 class="text-xl">Country: {country.name}</h1>
    <h1 class="text-xl">Population: {numberFormat(country.population)}</h1>
    <h1 class="text-xl">Capital: {country.capital}</h1>
  </div>
  <div class="pt-10 gap-10 flex justify-center">
    {#each country.sightseeing_places as place}
      <div class="flex flex-col w-96 border p-2 rounded-lg bg-accent">
        <div class="">
          <h1 class="border rounded-lg text-center mb-2 border-base-300">
            <b>{place.name}</b>
          </h1>
          <img src={place.picture_url} alt="" class="h-48 w-96 rounded-lg" />
        </div>
        <div
          class="mt-2 border-base-300 border rounded-lg text-center mb-2 p-1 flex justify-center items-center"
        >
          {place.description}
        </div>
      </div>
    {/each}
  </div>
</main>
