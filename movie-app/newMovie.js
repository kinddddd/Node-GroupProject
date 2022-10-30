// traemos los input el selecct y el boton
// inputs
const title$$ = document.querySelector('.title');
const director$$ = document.querySelector('.director');
const img$$ = document.querySelector('.img');
const year$$ = document.querySelector('.year');
const genre$$ = document.querySelector('.genre');

//boton
const button$$ = document.querySelector('.crear');
// creamos una funcion con los datos permitidos para introducir en la base de datos es decir con el modelo

const sendForm = async()=>{

    const data = {
        title: title$$.value ,
        img: img$$.value
        // director:director$$.value,
        // year:year$$.value,
        // genre:genre$$.value 
    }

    const dataSave = JSON.stringify(data);

    // para saber que se acreado creamos una p como info
    const confirmation$$ = document.createElement('p');

    try {
        await fetch('http://localhost:3000/movies/create',{// este objeto tendra la configuracion que le queremos enviar
        method : 'POST',
        headers:{// como va a ser lo que le voy a enviar ciertas configuraciones
            "Content-Type": "application/json"// siempre igual aunque se pueden complicar pero de momento asi
        },
        body: dataSave
        });
        confirmation$$.textContent = 'Creada correctamente'
    } catch (error) {
        confirmation$$.textContent = 'No se a creado'
    }
    
  document.body.appendChild(confirmation$$) ;
}

button$$.addEventListener('click',sendForm);