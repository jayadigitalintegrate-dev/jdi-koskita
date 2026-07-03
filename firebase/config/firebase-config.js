// ============================================================
// JDI KOSKITA - Firebase Client SDK Configuration
// Project: jdi-koskita
// ============================================================
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyBBjQbXnnOxc4MkO8bg4iiTIL7FoEoiers",
  authDomain: "jdi-koskita.firebaseapp.com",
  projectId: "jdi-koskita",
  storageBucket: "jdi-koskita.firebasestorage.app",
  messagingSenderId: "280684880955",
  appId: "1:280684880955:web:6199875974b69bfc89681e",
  measurementId: "G-RPFK3BB1CQ"
};
 
// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
 
// Export instance yang akan dipakai di halaman lain
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
