import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtXsKjM06UVEZSnHWz-YglxDaK8X7sz9U",
  authDomain: "filmfrenzy-rajann44.firebaseapp.com",
  projectId: "filmfrenzy-rajann44",
  storageBucket: "filmfrenzy-rajann44.appspot.com",
  messagingSenderId: "769104399223",
  appId: "1:769104399223:web:7f50e6c3af316116626f72",
};

const app = initializeApp(firebaseConfig);

//Created Database Object
export const fireDB = getFirestore(app);

//Movies Table
export const moviesTable = collection(fireDB, "movies");

export default app;
