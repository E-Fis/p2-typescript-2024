import { pelisCartelera } from "./movielist.js";

const contentHead =  (title:string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: rgb(10, 28, 58);;
}
.titulo{
    position: fixed;
    top: 0;
    text-align: center;    
    margin: 0rem 6rem 0rem 6rem;
    border: #ffffff;
    font-size: 3rem;
    background: goldenrod;
    color: #fffcfc;

}
.contenedor {
    margin: 10rem 6rem 4rem 6rem;    
}
.contenedor .pelicula{
    text-align: center;
    color: goldenrod;
    font-size: 20px;
}
.contenedor .pelicula .poster{
    width: 25%;
    margin-top: 10px;
    border-radius: 15px;
    
}
.paginacion {
	position: fixed;
    bottom: 0;
	background: #ffffff;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 20px;
	padding: 8px;
}

.paginacion button {
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 50px;
	width: 200px;
	background: #241744;
	color: #fff;
	border-radius: 100px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;

}
</style>
</head>`;

export const render = () => {
  return `<html>
  ${contentHead("Pel·lícules en cartellera")}
  <body>
  <div class="titulo", id="titulo">
        <h1>Pel·lícules en cartellera</h1>
  </div>
  <div class="contenedor" id="contenedor">
  ${addTitle()}
  </div>
   </body>
  </html>`

};

const movi = await pelisCartelera();



const addTitle = () => {
   let movieName = '';
   movi.forEach(m => {
   movieName += `
   <div class = "pelicula">
            <img class = "poster" src = "https://image.tmdb.org/t/p/w500/${m.poster_path}"
        </div>
   <h3>${m.original_title}</h3>`
 });
 return movieName
}

console.log(render());
