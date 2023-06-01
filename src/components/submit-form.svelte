<script setup lang="ts">
  import { z } from "zod";
  const noteSchema = z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(5, { message: "Name must be more than 5 characters" })
      .max(64, { message: "Name must be less than 64 characters" })
      .trim(),

    note: z
      .string({ required_error: "Note is required" })
      .min(5, { message: "Message must be at least 5 characters" })
      .trim(),
  });
  let errors: any = {
    fieldErrors: {},
    formErrors: [],
  };

  const handleSubmit = (event: Event) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const values = Object.fromEntries(formData.entries());

    // Validate the form data against the schema
    const validationResult = noteSchema.safeParse(values);

    if (!validationResult.success) {
      event.preventDefault(); // Prevent the default form submission behavior

      // There are validation errors, handle them as needed
      errors = validationResult.error.formErrors;
      console.log("Form validation errors:", errors);
      // Display the errors to the user or perform any other necessary action
    }
  };
</script>

<div class="border rounded-lg bg-base-300 flex w-96 flex flex-col items-center">
  <form
    method="POST"
    on:submit={handleSubmit}
    class="flex flex-col items-center"
  >
    <div class="flex flex-col w-72">
      <label for="name"> Name </label>
      <input name="name" class="rounded-lg" />
      {#if errors.fieldErrors.name}
        <span>
          <p class="text-error">{errors.fieldErrors.name[0]}</p>
        </span>
      {/if}
    </div>
    <div class="flex flex-col w-72">
      <label for="note"> Desription </label>
      <textarea name="note" class="rounded-lg" />
    </div>
    {#if errors.fieldErrors.note}
      <span>
        <p class="text-error">{errors.fieldErrors.note[0]}</p>
      </span>
    {/if}
    <div class="py-1">
      <button class="btn btn-info">Add</button>
    </div>
  </form>
</div>
