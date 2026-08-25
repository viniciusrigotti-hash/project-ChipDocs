// Script de Criar Ficha

// Import do Firebase
import { database } from "./firebase.js";

import {collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Declarações
const editor = document.getElementById("editor");
const titleInput = document.getElementById("titleInput");
const buttonSave = document.getElementById("buttonSave");
const limite = 10;

//Botão de salvar
buttonSave.addEventListener("click", async function (event) {
    event.preventDefault();
    
    const title = titleInput.value;
    const content = editor.innerHTML;
    
    const ficha = {
        title: title,
        content: content,
        createdAt: serverTimestamp()
    };

    try {

        const documento = await addDoc(
            collection(database, "fichas"),
            ficha
        );

        console.log("Ficha salva com sucesso");
        console.log(`ID da ficha: ${documento.id}`);

    }
    catch (error) {

        console.error("Erro ao salvar a ficha:", error);

    }
});

// Colar sem herdar formatação
editor.addEventListener("paste", (event) => {
    event.preventDefault();

    const texto = event.clipboardData.getData("text/plain");

    document.execCommand("insertText", false, texto);
});