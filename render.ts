import { pelisCartelera } from "./movielist.js";

const contentHead = (title: string) => `
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
    width: 100%;
    position: fixed;
    top: 0;
    text-align: center;    
    border: #ffffff;
    font-size: 3rem;
    background: rgb(101, 110, 105);
    color: goldenrod

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
  movi.forEach((m, index) => {
    movieName += `
   <div class = "pelicula">
            <a href=movie_${index}.html>
            <img class = "poster" src = "https://image.tmdb.org/t/p/w500/${m.poster_path}">
            </a>
         <h3>${m.original_title}</h3>
        <h3>Score:${m.vote_average}</h3>
      </div>`

  });
  return movieName;
}

const otherHead = (title: string) => `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body{
    background-color: rgb(209, 121, 38);;
}
.resumen{

    border-width: 5px;
    border-style: solid;
    border-color: bisque;
    padding-left: 90px;
    box-sizing: content-box;
    margin-left: 200px;
}

.resumen p{
    font-size: 25px; 

}
</style>
</head>
`;

// const addInfo = () => {
//   let movieInfo = '';
//   movi.forEach((m, index) => {
//     movieInfo += `
//    <div class = "resumen>
//             <img class = "poster" src = "https://image.tmdb.org/t/p/w500/${m.poster_path}">
//          <h3>Overview</h3>   
//          <p>${m.overview}</p>
        
//       </div>`

//   });
//   return movieInfo;
// }

const addInfo = (resum: string) => {
  return `
      <div class = "resumen>
               <img class = "poster" src = "https://image.tmdb.org/t/p/w500/${m.poster_path}">
            <h3>Overview</h3>   
            <p>${resum}}</p>
          
         </div>`
}


export const subHTMLs = (title: string, resum:string ) => {
  return `<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body{
    background-color: rgb(209, 121, 38);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.titulo_pelicula{
    width: 100%;
    height: 5%;
    border: 1rem;
    background: rgb(101, 110, 105);
    border: 0;
    text-align: center;
    display: inline-block;

}
.resumen{

    border-width: 5px;
    border-style: solid;
    border-color: bisque;
    padding-left: 10px;
    box-sizing: content-box;
    position: absolute;
    
    
}
.resumen p{
    font-size: 25px; 
}
</style>
</head>
<body>
    <div id="titulo_pelicula" class="titulo_pelicula">
        <h1>${title}</h1>
    </div>

<div id="resumen" class="resumen">
    <h2>Overview</h2>
    <p>${resum}</p>
</div>
</body>`

};


// for (let i = 0; i<=movi.length; i++){
//   console.log(`pelicula_${i}.html`);
// }

export let extHtml = [];
for (let i = 0; i<movi.length; i++){
  extHtml.push(subHTMLs(movi[i].original_title, movi[i].overview));
   }

