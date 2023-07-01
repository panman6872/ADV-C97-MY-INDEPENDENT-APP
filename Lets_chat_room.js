var firebaseConfig = {
      apiKey: "AIzaSyD8moeZhNZBe-zFOOaz1peslWnkco0aUtI",
      authDomain: "cudo-chat-d7409.firebaseapp.com",
      databaseURL: "https://cudo-chat-d7409-default-rtdb.firebaseio.com",
      projectId: "cudo-chat-d7409",
      storageBucket: "cudo-chat-d7409.appspot.com",
      messagingSenderId: "431743768672",
      appId: "1:431743768672:web:ee3de79fcb0b9e3fc18b05"
    };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Wellcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";

}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "lets_chat_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
