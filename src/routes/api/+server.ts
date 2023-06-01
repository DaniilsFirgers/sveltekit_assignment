import { error, json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }: any) {
  console.log("asdasdasd");
  const req = await request;
  console.log(req);
}

// fs.readFile(
//     "static/notes/data.json",
//     "utf-8",
//     function readFile(err, data) {
//       if (err) {
//         console.log(err);
//         return;
//       } else {
//         const previousNotes = JSON.parse(data);

//         const id = previousNotes.find((el) => el.id === note.id);
//         console.log(id);
//         // const stringifiedNotes = JSON.stringify(previousNotes);
//         // fs.writeFile("static/notes/data.json", stringifiedNotes, "utf8", () =>
//         //   console.log("Added new note")
//         // );
//       }
//     }
//   );
