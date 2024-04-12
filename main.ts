import { writeFile } from "fs/promises";
import { render } from "./render.js";



//const users = await movielist();
const html = render();
await writeFile('index.html', html);

