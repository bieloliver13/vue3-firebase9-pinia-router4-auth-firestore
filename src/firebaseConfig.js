// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmGbEjo2hbSeLZrA3JUufkxWwCnHYOzbg",
  authDomain: "vue-3-2022-5f13d.firebaseapp.com",
  projectId: "vue-3-2022-5f13d",
  storageBucket: "vue-3-2022-5f13d.appspot.com",
  messagingSenderId: "49952355615",
  appId: "1:49952355615:web:322114afdc6b5e03c6ec2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };