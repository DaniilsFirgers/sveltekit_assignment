import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const actions = {
  default: async ({ request }: any) => {
    const randomId = uuidv4();
    const formData = Object.fromEntries(await request.formData());
    const newNote = { ...formData, id: randomId };

    fs.readFile(
      "static/notes/data.json",
      "utf-8",
      function readFile(err, data) {
        if (err) {
          console.log(err);
          return;
        } else {
          const previousNotes = JSON.parse(data);

          previousNotes.notes.push(newNote);

          const stringifiedNotes = JSON.stringify(previousNotes);
          fs.writeFile("static/notes/data.json", stringifiedNotes, "utf8", () =>
            console.log("Added new note")
          );
        }
      }
    );
  },
};
