src="https://cdn.firebase.com/js/client/2.2.9/firebase.js";
var ref = new Firebase("https://vivid-torch-1590.firebaseio.com");
var grabusers =ref.child("/users");
grabusers.once("value", 
      function(snap){
        console.log(snap.val());
        snap.forEach(function(childsnap){
          var data = childsnap.val();
          existingval.push(data.toString());
          console.log(existingval);
        });
      });