// Script da Galeria

// Import do Firebase
import { database } from "./firebase.js";

import {collection, getDocs} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Declarações
const galleryMain = document.querySelector(".gallerymain");

//Buscar fichas
async function buscarFichas() {
    const consulta = await getDocs(
        collection(database, "fichas")
    );

    console.log("Quantidade de fichas:", consulta.size);;

    consulta.forEach((documento) => {

        console.log("ID:", documento.id);
        console.log("Dados:", documento.data());

    });
}

//Executar
buscarFichas();