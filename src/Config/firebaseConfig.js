import { getFirestore }  from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjQ4CjkX7KlHAwHnE35IBfghNW0BhE9hI",
    authDomain: "fir-50899.firebaseapp.com",
    projectId: "fir-50899",
    storageBucket: "fir-50899.appspot.com",
    messagingSenderId: "793649616349",
    appId: "1:793649616349:web:4a06055ec303db81d0d234",
    measurementId: "G-RMNWF9MXBR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage(app);