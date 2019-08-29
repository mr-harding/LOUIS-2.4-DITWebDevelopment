const Http = new XMLHttpRequest();
const url='https://sheets.googleapis.com/v4/spreadsheets/1alI8p4CO-AQGIBMDOpSXfEl5qRRUrZEfzA6iE0mN7mQ/values/Sheet1?key=AIzaSyB2Pizd0hheic67F_02cVQJxnArIlrywgo';
Http.open("GET", url);
Http.send();

var x;

Http.onreadystatechange = (e) => {
  x = JSON.parse(Http.responseText);

// Defult hosue page - for now
  document.getElementById("house-name").innerHTML = x.values[1][1];
  document.getElementById("house-blurb").innerHTML = x.values[1][2];
  document.getElementById("point").innerHTML = x.values[1][3];
  document.getElementById("point-blurb").innerHTML = x.values[1][4];
  document.getElementById("upcomming").innerHTML = x.values[1][5];
  document.getElementById("upcomming-blurb").innerHTML = x.values[1][6];
}
