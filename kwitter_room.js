
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDR8uU9Va9eixD-T4p1TZ9Y5KKcxypsFMc",
      authDomain: "qwerto-ade71.firebaseapp.com",
      databaseURL: "https://qwerto-ade71-default-rtdb.firebaseio.com",
      projectId: "qwerto-ade71",
      storageBucket: "qwerto-ade71.appspot.com",
      messagingSenderId: "816586736182",
      appId: "1:816586736182:web:b00214857883528b850e97"
    };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome" + user_name;            
  
  function addroom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room"
      });
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
       window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
}