import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH3C2FcNogwhZ85ykkZqSvlsNOiKhX0jE",
    authDomain: "auth-sample-cd2cf.firebaseapp.com",
    projectId: "auth-sample-cd2cf",
    storageBucket: "auth-sample-cd2cf.appspot.com",
    messagingSenderId: "544248370460",
    appId: "1:544248370460:web:65aca4917a45c68ab3d6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

