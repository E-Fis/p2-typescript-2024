import { writeFile } from "fs/promises";
import { extHtml, render, renderHTMLs } from "./render.js";


const html = render();
await writeFile('index.html', html);


const subhtml = extHtml;
for (let i = 0; i<subhtml.length; i++){
    await writeFile(`movie_${i}.html`, subhtml[i]);
  }