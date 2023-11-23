import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjY43OGYRt6JuTpgUz-obbiVzfXGK5vgs",
  authDomain: "task-manager-9118f.firebaseapp.com",
  projectId: "task-manager-9118f",
  storageBucket: "task-manager-9118f.appspot.com",
  messagingSenderId: "485137487952",
  appId: "1:485137487952:web:42e2663b6f76b67bd59955",
  measurementId: "G-PKVHYNZK3R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth} 