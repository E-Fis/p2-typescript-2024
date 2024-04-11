import { writeFile } from "fs/promises";
import { addTitle } from "./render.js";
import { pelisCartelera} from "./movielist.js";

//const users = await movielist();
const html = addTitle();
await writeFile('index.html', html);

