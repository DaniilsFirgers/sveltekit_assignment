<script lang="ts" setup>
  import moment from "moment-timezone";
  const datetime = moment().tz("EET").format("DD.MM.YYYY");
</script>

<footer class="flex justify-center bg-accent-focus">
  <div class="flex justify-center items-center">
    <h1 class="text-lg font-medium">{datetime}</h1>
  </div>
</footer>
