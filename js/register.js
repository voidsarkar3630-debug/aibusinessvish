import { auth, db } from "./firebase-config.js";

import {
createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

await setDoc(
doc(db, "users", user.uid),
{
name: name,
email: email,
role: "user",
createdAt: new Date()
}
);

alert("Registration Successful");

window.location.href = "login.html";

}
catch(error){

alert(error.message);

}

});
