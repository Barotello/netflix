import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCKNeB94axdX_hjN_XoT7ODEsqvUdPRViY",
  authDomain: "netflix-demo-3b8d8.firebaseapp.com",
  projectId: "netflix-demo-3b8d8",
  storageBucket: "netflix-demo-3b8d8.appspot.com",
  messagingSenderId: "517426298470",
  appId: "1:517426298470:web:8a5cc104409d95f3c9f7a7",
  measurementId: "G-3W74BJTSKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// User signup
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });

    console.log("User created:", user);
  } catch (err) {
    console.error("Signup error:", err);
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};

// Login
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful");
  } catch (err) {
    console.error("Login error:", err);
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};

// Logout
const logout = async () => {
  try {
    await signOut(auth);
    console.log("Logged out");

    // Çıkış sonrası kullanıcı durumu kontrolü
    const user = auth.currentUser;
    if (!user) {
      console.log("Oturum kapatıldı ve kullanıcı çıkış yaptı.");
    } else {
      console.log("Kullanıcı çıkışı yapılmadı:", user);
    }
  } catch (err) {
    console.error("Logout error:", err);
    alert("Çıkış yaparken bir hata oluştu.");
  }
};
export { auth, db, signup, login, logout };
