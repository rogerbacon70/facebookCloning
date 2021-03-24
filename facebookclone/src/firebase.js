
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBw5ENadjxLqRtUSbnm5gfideffqauBarA",
    authDomain: "facebook-clone-67ee3.firebaseapp.com",
    projectId: "facebook-clone-67ee3",
    storageBucket: "facebook-clone-67ee3.appspot.com",
    messagingSenderId: "901979759531",
    appId: "1:901979759531:web:61354bb7815567598de8ee"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth;

  export default firebaseConfig