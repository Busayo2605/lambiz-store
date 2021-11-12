import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCsr5GEmTwS3N044nZUg2ceHHfkan01FqM",
  authDomain:"lambiz-store.firebaseapp.com",
  projectId: "lambiz-store",
  storageBucket: "lambiz-store.appspot.com",
  messagingSenderId:"503448962978",
  appId: " 1:503448962978:web:c136b5995841ae9d0b54fb"
}

const app = initializeApp(config)
export const auth = getAuth(app)
export const db = getFirestore(app)