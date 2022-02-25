// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

const usersCollectionRef = collection(db, "users");

export const SignInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    const registeredUsers = [];
    const data = await getDocs(usersCollectionRef);
    data.docs.map((user) => {
        registeredUsers.push(user.data().user);
    });
    if (registeredUsers.includes(auth.currentUser.email)) {
    } else {
        await addDoc(usersCollectionRef, { user: auth.currentUser.email });
    }
};

export const storage = getStorage(app);
