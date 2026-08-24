// Importa a função que inicializa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Importa a função que conecta o Firestore ao projeto
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Configuração do projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJNxjrYbY3HlNuj-DXwX9Kc0ilSPQu2tc",
  authDomain: "chipdocs-f34e7.firebaseapp.com",
  databaseURL: "https://chipdocs-f34e7-default-rtdb.firebaseio.com/",
  projectId: "chipdocs-f34e7",
  storageBucket: "chipdocs-f34e7.firebasestorage.app",
  messagingSenderId: "483152901561",
  appId: "1:483152901561:web:930e870407c10f0368b268",
  measurementId: "G-LVTJDGGNZW"
};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Cria a conexão com o Firestore
const database = getFirestore(app);


// Exporta o banco para outros arquivos JavaScript
export { database };