var firebaseConfig = {
    apiKey: "AIzaSyAlTFnOHMCl8wHZFjtSj2aqA_eqKaafLyA",
    authDomain: "lets-chat-web-app-a46c9.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-a46c9-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-a46c9",
    storageBucket: "lets-chat-web-app-a46c9.appspot.com",
    messagingSenderId: "465871445462",
    appId: "1:465871445462:web:0897c4c6c9b789b9c31877"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
    message=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg")="";
}