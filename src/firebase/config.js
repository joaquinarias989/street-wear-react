import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0mgDqCDKYj1Vwija57Dlg8cauHTFuKzg",
  authDomain: "streetwear-ecommerce.firebaseapp.com",
  projectId: "streetwear-ecommerce",
  storageBucket: "streetwear-ecommerce.appspot.com",
  messagingSenderId: "326206984481",
  appId: "1:326206984481:web:ad26370e105d82a55c2e60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);
export default firestoreDB;
