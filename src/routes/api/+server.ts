import { error, json } from "@sveltejs/kit";
import fs from "fs";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }: any) {
  try {
    const req = await request.json();
    const noteID = req.id;

    const data = await readFileAsync("static/notes/data.json", "utf-8");
    const previousNotes = JSON.parse(data);
    const id = previousNotes.notes.find((el: any) => el.id === noteID).id;
    const filteredNotes = previousNotes.notes.filter((el: any) => el.id !== id);
    const stringifiedNotes = JSON.stringify({ notes: filteredNotes });

    await writeFileAsync("static/notes/data.json", stringifiedNotes, "utf8");

    return json({ status: 200 });
  } catch (error) {
    console.log(error);
    return json({ status: 404 });
  }
}
