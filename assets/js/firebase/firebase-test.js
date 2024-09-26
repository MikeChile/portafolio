import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { database } from './firebase-config.js';

function testConnection() {
    const dbRef = ref(database);
    get(child(dbRef, '/')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("Conexión exitosa:", snapshot.val());
        } else {
            console.log("No se encontraron datos.");
        }
    }).catch((error) => {
        console.error("Error al conectar a Firebase:", error);
    });
}

testConnection();
