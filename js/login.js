import { auth } from "./firebase-config.js";

import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {

console.log("Trying login...");

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

console.log("SUCCESS", userCredential.user);

alert("Login Success!");

if(email === "aibusinessvishwakarma@gmail.com"){
window.location.href = "admin.html";
}else{
window.location.href = "dashboard.html";
}

}
catch(error){

console.error(error);

alert(
error.code + "\n" +
error.message
);

}

});
