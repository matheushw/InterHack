import firebase from 'firebase';

const config={
    apiKey: "AIzaSyBYnxcNaMFRkxvMLYBKuF7xX-NxxU-dYW4",
    authDomain: "interhack-edc8d.firebaseapp.com",
    databaseURL: "https://interhack-edc8d.firebaseio.com",
    projectId: "interhack-edc8d",
    storageBucket: "",
    messagingSenderId: "96475034677",
    appId: "1:96475034677:web:1233752133fe864b"
}

const Firebase = firebase.initializeApp(config);

export default Firebase;