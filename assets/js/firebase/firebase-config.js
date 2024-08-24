// assets/js/firebase/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAluZ109GZoxE6lESiTwBbkFJ2YJIJQDVU",
    authDomain: "portafolio-mike-80686.firebaseapp.com",
    databaseURL: "https://portafolio-mike-80686-default-rtdb.firebaseio.com",
    projectId: "portafolio-mike-80686",
    storageBucket: "portafolio-mike-80686.appspot.com",
    messagingSenderId: "789123640224",
    appId: "1:789123640224:web:ed7cb1be54ba8bcb5252c5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
