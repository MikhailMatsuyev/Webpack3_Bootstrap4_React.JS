import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCSgTsizAH1hGNykjbw4OcOyobIg8kQMBE",
    authDomain: "fir-proj-wp-react.firebaseapp.com",
    databaseURL: "https://fir-proj-wp-react.firebaseio.com",
    projectId: "fir-proj-wp-react",
    storageBucket: "",
    messagingSenderId: "821212533013"
};
firebase.initializeApp(config);

//console.log('config', config);

export default firebase;