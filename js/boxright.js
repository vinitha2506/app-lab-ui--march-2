var x= document.getElementById("location");
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML="Geolocation is not supported by this browser.";

    }
    }
    function showPosition(position){
        x.innerHTML="Lattitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude;
    }
// cardsliding

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}