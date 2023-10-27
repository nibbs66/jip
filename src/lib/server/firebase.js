// Import the functions you need from the SDKs you need
import { deleteApp, getApps, initializeApp, } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { dev } from "$app/environment";
import { connectStorageEmulator, getStorage, ref, uploadString } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOs-zOJ2QJruPn5QoP0qnBtXrolZD5Szw",
    authDomain: "jipatsea.firebaseapp.com",
    projectId: "jipatsea",
    storageBucket: "jipatsea.appspot.com",
    messagingSenderId: "811713421747",
    appId: "1:811713421747:web:13969b82e8601a5ebbebc6",
    measurementId: "G-ZZ5TNFMQ41"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

if (dev || import.meta.env.MODE === "ci") {

    // Seed Firestore
    setDoc(doc(db, "posts", "test"), {
        title: "Hi Mom",
        content: "this is a test"
    });


    // Create a reference to the file to create
    const fileRef = ref(storage, "test.txt");

    // Upload a string to the file
    uploadString(fileRef, "Hello, world!", "raw")
        .then(() => {
            console.log("File created successfully!");
        })
        .catch((error) => {
            console.error("Error creating file:", error);
        });
}
