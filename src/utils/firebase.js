import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCZJMoNYMfy4jFJ_xceU5XjMj2g13zwtOk",
    authDomain: "detective-pokemon.firebaseapp.com",
    projectId: "detective-pokemon",
    storageBucket: "detective-pokemon.appspot.com",
    messagingSenderId: "756678973826",
    appId: "1:756678973826:web:680864352383232072179b",
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export default app;
