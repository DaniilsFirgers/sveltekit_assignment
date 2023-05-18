<script lang="ts" setup>
  export let countryName: string;
  export let imgUrl: string;
</script>

<div class="border rounded-lg w-fit p-2 bg-base-200">
  <h1 class="text-lg font-medium text-center text-primary-focus">
    {countryName}
  </h1>
  <img src={imgUrl} alt={`${countryName}-flag`} class="h-40 w-80 rounded-lg" />
</div>
