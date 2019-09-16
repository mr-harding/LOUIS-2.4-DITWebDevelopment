const Http = new XMLHttpRequest();
const url='https://sheets.googleapis.com/v4/spreadsheets/1alI8p4CO-AQGIBMDOpSXfEl5qRRUrZEfzA6iE0mN7mQ/values/Sheet1?key=AIzaSyB2Pizd0hheic67F_02cVQJxnArIlrywgo';
Http.open("GET", url);
Http.send();

var c = document.getElementsByClassName("hero2");


var x;
Http.onreadystatechange = (e) => {
  x = JSON.parse(Http.responseText);
}

function pageSelection(a){
  var a = a

  location.replace("house-page.html");

  localStorage.setItem("houseName", x.values[a][1]);
  localStorage.setItem("blurb", x.values[a][2]);
  localStorage.setItem("point", x.values[a][3]);
  localStorage.setItem("pointBlurb", x.values[a][4]);
  localStorage.setItem("upcomming", x.values[a][5]);

  if (a==1) {
    document.c.style.backgroundColor = "black";
  }

}

function redirrectOverall(){
  location.replace("overall.html");

  localStorage.setItem("house1", x.values[7][1]);
  localStorage.setItem("house2", x.values[8][1]);
  localStorage.setItem("house3", x.values[9][1]);
  localStorage.setItem("house4", x.values[10][1]);
  localStorage.setItem("house5", x.values[11][1]);

}
document.getElementById("n1House").innerHTML = localStorage.getItem("house1");
document.getElementById("n2House").innerHTML = localStorage.getItem("house2");
document.getElementById("n3House").innerHTML = localStorage.getItem("house3");
document.getElementById("n4House").innerHTML = localStorage.getItem("house4");
document.getElementById("n5House").innerHTML = localStorage.getItem("house5");


document.getElementById("houseName").innerHTML = localStorage.getItem("houseName");
document.getElementById("houseBlurb").innerHTML = localStorage.getItem("blurb");
document.getElementById("point").innerHTML = localStorage.getItem("point");
document.getElementById("pointBlurb").innerHTML = localStorage.getItem("pointBlurb");
document.getElementById("upcomming").innerHTML = localStorage.getItem("upcomming");
