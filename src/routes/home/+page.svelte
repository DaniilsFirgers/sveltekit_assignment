<script lang="ts" setup>
  import fs from "fs";
  import axios from "axios";
  import { notesStore } from "../../stores/notes";
  import SubmitForm from "../../components/submit-form.svelte";

  let notes: any[] = [];
  async function getNotes() {
    const res = await axios.get("/notes_data");
    const data = await res.data;

    notes = data.notes;
  }

  async function handelOnDeleteNote(note: any) {
    axios.delete("/api", { data: note }).then(async () => {
      await getNotes();
    });
  }
  getNotes();
</script>

<div class="flex flex-col justify-center items-center">
  <div class="flex items-center justify-between gap-5 mb-2">
    <h1>Travelling notes</h1>
    <label
      for="my_modal_6"
      class="border rounded-lg p-1 cursor-pointer bg-base-200">Add Note</label
    >
  </div>

  {#if notes.length === 0}
    <h1>Currently there are no notes...</h1>
  {:else}
    <div
      class="border rounded-lg w-fit p-5 max-h-96 overflow-x-auto bg-base-200 border-secondary"
    >
      {#each notes as note}
        <div
          class="border mb-3 p-2 rounded-lg w-80 flex items-center bg-base-300 border-accent-focus"
        >
          <div class="flex-grow">
            <h1>Title: {note.name}</h1>
            <p>{note.note}</p>
          </div>
          <button
            on:click={() => handelOnDeleteNote(note)}
            class="rounded-lg border h-8 p-1 bg-red-400">Delete</button
          >
        </div>
      {/each}
    </div>
  {/if}

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my_modal_6" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box p-0 relative">
      <label
        for="my_modal_6"
        class="rounded rounded-full p-1 absolute right-1 cursor-pointer"
        >X</label
      >

      <div
        class="modal-action flex flex-row items-center justify-center m-0 p-2 my-10"
      >
        <SubmitForm />
      </div>
    </div>
  </div>
</div>
