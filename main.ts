import { writeFile } from "fs/promises";
import { render, renderHTMLs } from "./render.js";


const html = render();
await writeFile('index.html', html);


const subhtml = renderHTMLs();
for (let i = 0; i<=3; i++){
    await writeFile(`movie_${i}.html`, subhtml);
  }