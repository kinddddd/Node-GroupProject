const movieCont$$= document.querySelector('.cont-movies');
const select$$ = document.querySelector('.select-movies');
const button$$ = document.querySelector('button');
//hacemos una peticion traer una pelicula
const request = () => {
    fetch('http://localhost:3000/movies/title/' + select$$.value)
    .then((res)=>res.json())// obteneos la respuesta lo pasamos a json
    .then((movie)=>printMovies(movie))// cuando acabes me das la movie y me llamasa la funcion print..
};

const getMovies = () => {// esta funcion hace falta para recoger todas las pelis y abajo con el valor que nos da llenar las opciones del selects
    fetch('http://localhost:3000/movies/')
    .then((res)=>res.json())// obteneos la respuesta lo pasamos a json
    .then((movies)=>printSelect(movies))// cuando acabes me das la movie y me llamasa la funcion print..
};

const printSelect = (movies)=>{// esta funcion recoge las pelis y crea una opcion para cada una
    // esta funcion se crea para que dinamicamente con un bucle me cree todas las opciones de titulo

    for (const movie of movies) {
        
        const option$$ = document.createElement('option');
        option$$.value = movie.title;
        option$$.textContent = movie.title;
        select$$.appendChild(option$$);
        
    }
}

const printMovies = (movie)=>{// como argumento le pasamos movie que es lo que tiene que pintar
    movieCont$$.innerHTML='';// para borrar el div
    const name$$ = document.createElement('h3');
    name$$.textContent = movie.title;
    const img$$ = document.createElement('img');
    img$$.classList.add('img-size');
    img$$.src =movie.img; 
    const divForMovie$$ = document.createElement('div');
    divForMovie$$.classList.add('movie-detail');
    divForMovie$$.appendChild(name$$);
    divForMovie$$.appendChild(img$$);
    movieCont$$.appendChild(divForMovie$$);
}

button$$.addEventListener('click',request);// llamamos a la funcion cuando hagamos click y nos trae el valor del input que pongamos
getMovies(); 


