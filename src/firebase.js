import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA0Za9iy8XkqdUl_2y5kKQr_M0SLD5FiSs",
    authDomain: "vue-coffe.firebaseapp.com",
    projectId: "vue-coffe",
    storageBucket: "vue-coffe.appspot.com",
    messagingSenderId: "269784892202",
    appId: "1:269784892202:web:b7827eb6aec99b4fba5453"
  });

export const auth = getAuth(firebaseApp)
export const dbs = getFirestore(firebaseApp)