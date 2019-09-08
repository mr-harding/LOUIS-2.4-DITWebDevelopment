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

  localStorage.setItem("test", x.values[a][1]);
  localStorage.setItem("test2", x.values[a][1]);
  localStorage.setItem("test3", x.values[a][1]);
  localStorage.setItem("test4", x.values[a][1]);
  localStorage.setItem("test5", x.values[a][1]);

}

function redirrectOverall(){

  window.location.href = "overall.html";

  document.getElementById("n1-house").innerHTML = x.values[7][1];
  document.getElementById("n2-house").innerHTML = x.values[8][1];
  document.getElementById("n3-house").innerHTML = x.values[9][1];
  document.getElementById("n4-house").innerHTML = x.values[10][1];
  document.getElementById("n5-house").innerHTML = x.values[11][1];
}


document.getElementById("house-name").innerHTML = localStorage.getItem("test");
document.getElementById("house-blurb").innerHTML = localStorage.getItem("test2");
document.getElementById("point").innerHTML = localStorage.getItem("test3");
document.getElementById("point-blurb").innerHTML = localStorage.getItem("test4");
document.getElementById("upcomming").innerHTML = localStorage.getItem("test5");
