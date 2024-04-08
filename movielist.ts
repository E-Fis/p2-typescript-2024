export {pelisCartelera};

const pelisCartelera = async() => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=17358cb9b1de8f2be0ffba417a891dc8';
  const respuesta = await fetch(url);
  const pelis = await respuesta.json();
  //console.log(pelis.results);
  return pelis.results;


}

pelisCartelera();