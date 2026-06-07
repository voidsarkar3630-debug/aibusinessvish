import { auth, db } from "./firebase-config.js";

import {
onAuthStateChanged,
signOut
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

const projectTable =
document.getElementById("projectTable");

projectTable.innerHTML = "";

const q = query(
collection(db, "projects"),
where("userId", "==", user.uid)
);

const snapshot = await getDocs(q);

snapshot.forEach((docSnap) => {

const project = docSnap.data();

totalProjects++;

totalSpent += Number(project.price || 0);

projectTable.innerHTML += `
<tr>
<td>${project.projectName}</td>
<td>₹${project.price}</td>
<td>${project.status}</td>
</tr>
`;

});

document.getElementById("projectCount").textContent =
totalProjects;

document.getElementById("totalSpent").textContent =
"₹" + totalSpent;

});

document
.getElementById("logoutBtn")
.addEventListener("click", async () => {

await signOut(auth);

window.location.href = "login.html";

});
