import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjpEaU5lZi3J72zsLDPBKQTn9Hg1Lx4XM',
  authDomain: 'camphin-ffc56.firebaseapp.com',
  projectId: 'camphin-ffc56',
  storageBucket: 'camphin-ffc56.appspot.com',
  messagingSenderId: '430054851963',
  appId: '1:430054851963:web:3466408e174cff225de9de',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp