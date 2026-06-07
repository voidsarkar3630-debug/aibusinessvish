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
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
onAuthStateChanged,
signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "YOUR_MSG_ID",
appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("email").innerText=user.email;
document.getElementById("uid").innerText=user.uid;

document.getElementById("name").innerText=
user.displayName || "AI BUSINESS User";

}else{

window.location="login.html";

}

});

document.getElementById("logoutBtn").onclick=()=>{

signOut(auth)
.then(()=>{

window.location="login.html";

});

};
