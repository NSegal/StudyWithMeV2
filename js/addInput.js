var counter = 1;
var limit = 10;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of courses: " + counter);
     }
     else {
          var newdiv = document.createElement('div');
          counter++;
          var placestring = 'Course '+ counter.toString();
          newdiv.innerHTML =  '<br><input type="text" name="myInputs" class="form-control" placeholder="'+placestring+'"required>';
          document.getElementById(divName).appendChild(newdiv);
     }
}