import { initializeApp } from "firebase/app";

import { getFirestore  } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPYSoZAqNmGRGkVMwMLETa-gFC-zq2fLU",
  authDomain: "crud-fireproyec.firebaseapp.com",
  databaseURL: "https://crud-fireproyec-default-rtdb.firebaseio.com",
  projectId: "crud-fireproyec",
  storageBucket: "crud-fireproyec.appspot.com",
  messagingSenderId: "465280420446",
  appId: "1:465280420446:web:61c3dc5b29b7ae658902cf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)