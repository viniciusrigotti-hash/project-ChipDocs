// Script da Galeria

// Import do Firebase
import { database } from "./firebase.js";

import {collection, getDocs, query, orderBy} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Declarações
const galleryContainer = document.getElementById("galleryContainer");

//Buscar fichas
async function buscarFichas() {
    const consultaFichas = query (
        collection(database, "fichas"),
        orderBy("createdAt", "desc")
    );

    const consulta = await getDocs(consultaFichas);

    console.log("Quantidade de fichas:", consulta.size);;

    consulta.forEach((documento) => {

        const dados = documento.data();

        const ficha = document.createElement("div");

        ficha.id = "ficha";

        ficha.innerHTML = `
            <h2>${dados.title}</h2>
            <div class="fichaContent">${dados.content}</div>
        `;

        galleryContainer.appendChild(ficha);

        
    });
}

//Executar
buscarFichas();