
// exist user login
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html");
    } else {
        document.getElementById("user").innerHTML=user.email
    }
  });

function logOut(){
    firebase.auth().signOut();
  }