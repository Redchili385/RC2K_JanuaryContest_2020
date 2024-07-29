const firebaseConfig = {
    apiKey: "AIzaSyCnwErhu51FxxSHNqlNf01heKtr0WGmVis",
    authDomain: "mfmi24.firebaseapp.com",
    projectId: "mfmi24",
    storageBucket: "mfmi24.appspot.com",
    messagingSenderId: "65513768258",
    appId: "1:65513768258:web:9452263738909c568234db",
    measurementId: "G-M1Z8ZE03YJ"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const firebaseStorage = firebase.storage();