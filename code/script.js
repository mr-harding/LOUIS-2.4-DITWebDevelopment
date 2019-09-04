const Http = new XMLHttpRequest();
const url='https://sheets.googleapis.com/v4/spreadsheets/1alI8p4CO-AQGIBMDOpSXfEl5qRRUrZEfzA6iE0mN7mQ/values/Sheet1?key=AIzaSyB2Pizd0hheic67F_02cVQJxnArIlrywgo';
Http.open("GET", url);
Http.send();



var x;
Http.onreadystatechange = (e) => {
  x = JSON.parse(Http.responseText);
}

function pageSelection(a){
  window.location.href = "/Users/louisconway/github/houseresults---7DIT/code/house-page.html";


  document.getElementById("house-name").innerHTML = x.values[a][1];
  document.getElementById("house-blurb").innerHTML = x.values[a][2];
  document.getElementById("point").innerHTML = x.values[a][3];
  document.getElementById("point-blurb").innerHTML = x.values[a][4];
  document.getElementById("upcomming").innerHTML = x.values[a][5];
  document.getElementById("upcomming-blurb").innerHTML = x.values[a][6];
}

function redirrectOverall(){
  window.location.href = "/Users/louisconway/github/houseresults---7DIT/code/overall.html";

  document.getElementById("n1-house").innerHTML = x.values[7][1];
  document.getElementById("n2-house").innerHTML = x.values[8][1];
  document.getElementById("n3-house").innerHTML = x.values[9][1];
  document.getElementById("n4-house").innerHTML = x.values[10][1];
  document.getElementById("n5-house").innerHTML = x.values[11][1];
}
