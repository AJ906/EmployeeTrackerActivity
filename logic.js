// ========================================== START CODING BELOW!!

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAfwIYxRwylW_E_p9z1fnuwN0qTTqZNx5g",
        authDomain: "first-firebase-afdaf.firebaseapp.com",
        databaseURL: "https://first-firebase-afdaf.firebaseio.com",
        projectId: "first-firebase-afdaf",
        storageBucket: "first-firebase-afdaf.appspot.com",
        messagingSenderId: "52101202025"
      };
  
      firebase.initializeApp(config);
  
      var dataRef = firebase.database();
  
      // Initial Values
      var name = "";
      var email = "";
      var role = "";
      //var comment = "";
  
      // Capture Button Click
      $("#submit-bid").on("click", function(event) {
        event.preventDefault();
  
        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        role = $("#role-input").val().trim();
        //comment = $("#comment-input").val().trim();
  
        // Code for the push
        dataRef.ref().push({
  
          name: name,
          email: email,
          role: role,
          //comment: comment,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
      });
  
      // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
      dataRef.ref().on("child_added", function(childSnapshot) {
  
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().role);
        //console.log(childSnapshot.val().comment);
       // console.log(childSnapshot.val().joinDate);
  
        // full list of items to the well
        $("#current-emp").append("<tr> <td> " + childSnapshot.val().name +
          " </td><td> " + childSnapshot.val().email +
          " </td><td> " + childSnapshot.val().role + " </td></tr>");
  
      // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  
      dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
  
        // Change the HTML to reflect
        $("#name-display").text(snapshot.val().name);
        $("#email-display").text(snapshot.val().email);
        $("#age-display").text(snapshot.val().age);
        $("#comment-display").text(snapshot.val().comment);
      });