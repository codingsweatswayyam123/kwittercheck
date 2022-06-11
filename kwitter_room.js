
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBO4_E_sjJmGd8WbSdcqLnZWtypk1WM2eQ",
  authDomain: "project-kwitter-a801f.firebaseapp.com",
  databaseURL: "https://project-kwitter-a801f-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-a801f",
  storageBucket: "project-kwitter-a801f.appspot.com",
  messagingSenderId: "505842421821",
  appId: "1:505842421821:web:e0fbb34e64df8589f71a54"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome! "+user_name;

function logout (){
localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("The room name is "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
});
                                                             }); }
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}