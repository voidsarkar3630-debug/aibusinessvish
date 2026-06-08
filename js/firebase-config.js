import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyBfclkZItgu6MwX4FCQ3Ud76aqqVDS9qC0",
authDomain: "ai-business-vish.firebaseapp.com",
projectId: "ai-business-vish",
storageBucket: "ai-business-vish.firebasestorage.app",
messagingSenderId: "976603440610",
appId: "1:976603440610:web:e764e649b57e91098d05bb",
measurementId: "G-8LD2T2DGFD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
