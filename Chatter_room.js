
var firebaseConfig = {
  apiKey: "AIzaSyAQ7hV1MRcm5T_S8_ynu7rxGOVX0CIyqOQ",
  authDomain: "chatter-7a23e.firebaseapp.com",
  projectId: "chatter-7a23e",
  storageBucket: "chatter-7a23e.appspot.com",
  messagingSenderId: "759158674984",
  appId: "1:759158674984:web:acc35eeac7f0e5fbcfc71d"
};

firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Names - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
    document.getElementById("output").innerHTML += row;
    });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function AddRoom()
 { 
      room_name = document.getElementById("room_name").value; 
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update ({
      purpose:"adding room name"
        });
    window.location = "Chatter_page.html";
}
    function redirectToRoomName(name) { 
          console.log(name);
          localStorage.setItem("room_name,name");
          window.location = "Chatter_page.html";
    }
function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "Home.html";
}