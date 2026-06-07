import { auth, db } from "./firebase-config.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

if (!user) {
window.location.href = "login.html";
return;
}

document.getElementById("userEmail").textContent =
user.email;

let totalProjects = 0;
let totalSpent = 0;

const q = query(
collection(db, "projects"),
where("userId", "==", user.uid)
);

const snapshot = await getDocs(q);

snapshot.forEach((doc) => {

const project = doc.data();

totalProjects++;

totalSpent += project.price || 0;

});

document.getElementById("projectCount").textContent =
totalProjects;

document.getElementById("totalSpent").textContent =
"₹" + totalSpent;

});
