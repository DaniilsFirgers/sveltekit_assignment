<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
  export let statusCode: number = $page.status;

  let notFoundMessage: string = "Page is not found";
  let internalServerErrorMsg: string = "Something is wrong with the server.";

  let notFoundText: string =
    "But don't worry, you will find plenty of cool stuff on other pages";

  let internalServerErrorText: string =
    "But don't worry, we are working on it...";
</script>

<main class="flex flex-col align-center justify-center h-screen">
  <div class="">
    <h2
      class="flex items-center justify-center h-screenfont-serif text-6xl font-extrabold"
    >
      <span class="sr-only">Error</span>{statusCode}
    </h2>
  </div>
  <div class="mt-10">
    <h3
      class="flex items-center justify-center h-screenfont-serif text-6xl font-extrabold"
    >
      {#if statusCode === 404}
        {notFoundMessage}
      {:else if statusCode === 500}
        {internalServerErrorMsg}
      {/if}
    </h3>
    <p class="mt-4 mb-8 dark:text-gray-400 flex items-center justify-center">
      {#if statusCode === 404}
        {notFoundText}
      {:else if statusCode === 500}
        {internalServerErrorText}
      {/if}
    </p>
    <div class="flex items-center justify-center">
      <button
        class="flex flex-row items-center bg-grey hover:bg-gray text-grey-darker font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        ><Icon icon="material-symbols:home-outline" />
        <a class="ml-2" href="/">Redirect to Home Page</a></button
      >
    </div>
  </div>
</main>
