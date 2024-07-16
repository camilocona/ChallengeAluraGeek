import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre,precio,url){
    const carta = document.querySelector("li");
    carta.className = "card";
    carta.innerHTML = `<img class="producto" src="${url}" alt="producto"> 
        <p class="nombre_producto">${nombre}</p>
        <p class="precio">${precio} <img src="img/Vector.svg" alt="basura"></p>
    `

    return carta;
}

async function listarCarta(){
    const listaAPI = await conexionAPI.listarCards()

    listaAPI.forEach(carta => lista.appendChild(crearCard(carta.nombre,carta.precio,carta.url)))
} 

listarCarta()