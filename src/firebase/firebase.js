import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDqvqG98he-FsSWaPZyrNJpDqnTuB9Jy9E",
    authDomain: "expensify-by-react.firebaseapp.com",
    databaseURL: "https://expensify-by-react.firebaseio.com",
    projectId: "expensify-by-react",
    storageBucket: "expensify-by-react.appspot.com",
    messagingSenderId: "602590054396",
    appId: "1:602590054396:web:908f985fe61fe3d1651479",
    measurementId: "G-M5W21P7PSW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   firebase.database().ref().set({
//       name:"Shardul"
//   })
  const database = firebase.database()

  export {firebase, database}