import image1 from './app-API-movies.png';
import image2 from './crud-js.png';
import image3 from './slot-machine.png';







const proyectos = [
    {
        id: 1,
        img: image1,
        title: "App de películas",
        copy: "uso de API ombd con react js",
        url: "https://jos57.github.io/app-API-movies/",
        repo: "https://github.com/jos57/app-API-movies.git",
        desc:"Buscador de películas desarrollado en React js implementando API OMDB."
    },

    {
        id: 2,
        img: image2,
        title: "CRUD",
        copy: "crud realizado en javascript vanilla",
        url:"https://jos57.github.io/crud-js/",
        repo:  "https://github.com/jos57/crud-js",
        desc: "Aplicación de registro de usuarios con funciones básicas: crear, leer, actualizar y borrar usuarios, desarrollada en javascript vanilla."
    },

    {
        id: 3,
        img: image3,
        title: "Juego máquina tragamonedas",
        copy: "juego maquina tragamonedas en javascript vanilla",
        repo: "https://github.com/jos57/the-game-of-slot-machine",
        url: "https://jos57.github.io/the-game-of-slot-machine/",
        desc: "Juego tipo tragamonedas o casino desarrollado en javascript vanilla con uso de sprites hechos en adobe illustrator."
    }
]

export default proyectos;
