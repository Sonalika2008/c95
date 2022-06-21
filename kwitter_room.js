var firebaseConfig = {
    apiKey: "AIzaSyC8DeMgXqKUvLMYBzq7cAjq8EAqfGqnLGQ",
    authDomain: "kwitter-2cea2.firebaseapp.com",
    databaseURL: "https://kwitter-2cea2-default-rtdb.firebaseio.com",
    projectId: "kwitter-2cea2",
    storageBucket: "kwitter-2cea2.appspot.com",
    messagingSenderId: "554992573724",
    appId: "1:554992573724:web:86a3d816c1518eaed72ed9",
    measurementId: "G-9W4E1M3QM6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getitem("user_name");
  document.getElementById("user_name").innerHTML= "welcome" + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").chid(room_name).update({

      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }

 function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    Room_names = childKey;
    console.log("Room_name -"+Room_names);
    row="<div class ='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
   });
  });
 }

 getData();

 function redirectToRoomName(name)
 {
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location = "kwitter_page.html";
 }