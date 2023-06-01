<script lang="ts" setup>
  import fs from "fs";
  import axios from "axios";
  import { notesStore } from "../../stores/notes";
  import SubmitForm from "../../components/submit-form.svelte";

  let notes = getNotes();
  async function getNotes() {
    const res = await $notesStore;
    return res.notes;
  }

  async function handelOnDeleteNote(note: any) {
    console.log("sadsdasd");
    await axios.delete("/api", { data: note });
  }
  getNotes();
</script>

<main class="flex flex-col justify-center items-center">
  <div class="flex">
    <h1>My travelling notes:</h1>
    <label for="my_modal_6" class="btn">open modal</label>
  </div>

  {#await notes}
    <h1>Waiting for countries data...</h1>
  {:then notes}
    <div class="border rounded-lg w-fit p-5">
      {#each notes as note}
        <div class="border mb-3 p-2 rounded-lg w-80 flex">
          <div class="flex-grow">
            <h1>Title: {note.name}</h1>
            <p>{note.note}</p>
          </div>
          <button on:click={() => handelOnDeleteNote(note)}>Delete</button>
        </div>
      {/each}
    </div>
  {/await}

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my_modal_6" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box p-0 relative">
      <label for="my_modal_6" class="rounded rounded-full p-1 absolute right-1"
        >X</label
      >

      <div
        class="modal-action flex flex-row items-center justify-center m-0 p-2 my-10"
      >
        <SubmitForm />
      </div>
    </div>
  </div>
</main>
