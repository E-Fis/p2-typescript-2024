import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadUsers } from "./movielist.js";

const users = await loadUsers(100);
const html = render(users);
await writeFile('users.html', html);

