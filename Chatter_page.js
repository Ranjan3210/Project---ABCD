user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
var firebaseConfig = {
      apiKey: "AIzaSyA-ysq9KmWYGtCZhrlRgG51AGt6OgicXbk",
      authDomain: "kwitter-7f97d.firebaseapp.com",
      databaseURL: "https://kwitter-7f97d-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f97d",
      storageBucket: "kwitter-7f97d.appspot.com",
      messagingSenderId: "38934150489",
      appId: "1:38934150489:web:b97f79855d15f86a1c2048"
    };
    
    firebase.initializeApp(firebaseConfig);

 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
   console.log(firebase_message_id);
   console.log(message_data);
    name = message_data['name'];
    message  = message_data['message'];
    like = message_data['like'];
    name_row  = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
    message_row = "<h4 class='message_h4'>"+message+"</h4>";
    like_row  = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLikes(this.id)'>";
    span_row = "<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button><hr>";

    row = name_row + message_row  + like_row + span_row;
    document.getElementById("output").innerHTML += row;
    //End code
      } });  }); }
getData();
function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "Home.html";
}
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";
}
function updateLikes(message_id) { 
      console.log("Button clicked  - "+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value ; 
      updated_Likes = Number(likes) + 1;
      console.log(updated_Likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_Likes
       });

}
