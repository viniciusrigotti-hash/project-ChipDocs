// Script de Criar Ficha

// Import do Firebase
import { database } from "./firebase.js";

import {collection, addDoc} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Declarações
const editor = document.getElementById("editor");
const titleInput = document.getElementById("titleInput");
const buttonSave = document.getElementById("buttonSave");

//Botão de salvar
buttonSave.addEventListener("click", async function (event) {
    event.preventDefault();
    
    const title = titleInput.value;
    const content = editor.textContent;
    
    const ficha = {title: title, content: content};

    try {

        const documento = await addDoc(
            collection(database, "fichas"),
            ficha
        );

        console.log("Ficha salva com sucesso!");
        console.log(`ID da ficha: ${documento.id}`);

    }
    catch (error) {

        console.error("Erro ao salvar a ficha:", error);

    }
});

// Colar sem herdar formatação
editor.addEventListener("paste", function (event) {
    event.preventDefault();

    const editorText = event.clipboardData.getData("text/plain");
    
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    selection.deleteFromDocument();

    const range = selection.getRangeAt(0);
    range.insertNode(document.createTextNode(editorText));

    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    editor.classList.remove("empty");
});

// Texto placeholder aparecer quando vazio
if (editor.textContent.trim() === "")
{
    editor.classList.add("empty");
}

editor.addEventListener("input", function (event) {
    if (editor.textContent.trim() === "")
    {
        editor.classList.add("empty");
        
    }
    else
    {
        editor.classList.remove("empty");
    }
});