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
name=localStorage.getItem("user_name");
function addRoom() {
  Room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_name).update({
        purpose: "adding room name"
  });


}

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+Room_names+"</div><hr>";

//End code
});});}
getData();
function redirectToRoomName() {
  localStorage.setItem("room_name",Room_name);
  window.location="kwitter_page.html";

}
function logout() {
  localstoarge.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html";
}