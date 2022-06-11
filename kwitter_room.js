
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig =
      { apiKey: "AIzaSyBBjg7YF4MZGjarCtAcs3rEE-YLOmbxG8U", 
       authDomain: "chatup--swayyam.firebaseapp.com", 
       databaseURL: "https://chatup--swayyam-default-rtdb.firebaseio.com",
       projectId: "chatup--swayyam", 
       storageBucket: "chatup--swayyam.appspot.com", 
       messagingSenderId: "507567041310",
       appId: "1:507567041310:web:cf39a85f889bb6efd5370f" };
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