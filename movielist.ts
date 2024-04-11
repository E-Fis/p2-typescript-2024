export class Pelicula{
  constructor(
    public original_language:string,
    public original_title:string,
    public overview:string,
    public release_date: string,
    public poster_path: string,
    public vote_average:number)
    {
      // this.original_language;
      // this.original_title;
      // this.overview;
      // this.elease_date;
      // this.vote_average;
      
    }


  
  
 }



export const pelisCartelera = async() => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=17358cb9b1de8f2be0ffba417a891dc8';
  const respuesta = await fetch(url);
  const pelis = await respuesta.json();
  //console.log(pelis.results);
  const enCartelera : Array<string> = [];
  for (const {original_language, original_title, overview, release_date, poster_path,vote_average} of pelis.results){
    enCartelera.push(new Pelicula(original_language, original_title, overview, release_date, poster_path, vote_average));
    //enCartelera.push(original_language, original_title, overview, release_date, vote_average);
  }
  //console.log(enCartelera);
  return enCartelera;
}

