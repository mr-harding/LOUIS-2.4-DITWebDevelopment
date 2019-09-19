const Http = new XMLHttpRequest();
const url='https://sheets.googleapis.com/v4/spreadsheets/1alI8p4CO-AQGIBMDOpSXfEl5qRRUrZEfzA6iE0mN7mQ/values/Sheet1?key=AIzaSyB2Pizd0hheic67F_02cVQJxnArIlrywgo';
Http.open("GET", url);
Http.send();

var x;
Http.onreadystatechange = (e) => {
  x = JSON.parse(Http.responseText);
}

function pageSelection(a){
  var a = a
  location.replace("house-page.html");

// storing cell information
  localStorage.setItem("houseName", x.values[a][1]);
  localStorage.setItem("blurb", x.values[a][2]);
  localStorage.setItem("point", x.values[a][3]);
  localStorage.setItem("pointBlurb", x.values[a][4]);
  localStorage.setItem("upcoming", x.values[a][5]);
  localStorage.setItem("upcomingBlurb", x.values[a][6]);

// background colour selection based on house selected
  if (a == 1) {
    localStorage.setItem("houseColour", "black");
  } else if (a == 2) {
    localStorage.setItem("houseColour", "blue");
  } else if (a == 3){
    localStorage.setItem("houseColour", "green");
  } else if (a == 4){
    localStorage.setItem("houseColour", "orange");
  } else if (a == 5){
    localStorage.setItem("houseColour", "red");
  }

}

// House Page Spreadsheet information display
document.getElementById("houseName").innerHTML = localStorage.getItem("houseName");
document.getElementById("houseBlurb").innerHTML = localStorage.getItem("blurb");
document.getElementById("point").innerHTML = localStorage.getItem("point");
document.getElementById("pointBlurb").innerHTML = localStorage.getItem("pointBlurb");
document.getElementById("upcoming").innerHTML = localStorage.getItem("upcoming");
document.getElementById("upcomingBlurb").innerHTML = localStorage.getItem("upcomingBlurb");

// House background colour
document.getElementById("changingColour").style.background = localStorage.getItem("houseColour")
