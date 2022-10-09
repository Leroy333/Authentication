import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGfjf_cn9w6nLL4uUWWeSYUGaSj6hdqyI",
  authDomain: "vue-fire-auth-70796.firebaseapp.com",
  projectId: "vue-fire-auth-70796",
  storageBucket: "vue-fire-auth-70796.appspot.com",
  messagingSenderId: "794527749684",
  appId: "1:794527749684:web:00238c789f23f84fc15c61"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth} 