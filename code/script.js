const Http = new XMLHttpRequest();
const url='https://sheets.googleapis.com/v4/spreadsheets/1alI8p4CO-AQGIBMDOpSXfEl5qRRUrZEfzA6iE0mN7mQ/values/Sheet1?key=AIzaSyB2Pizd0hheic67F_02cVQJxnArIlrywgo';
Http.open("GET", url);
Http.send();

var x;

Http.onreadystatechange = (e) => {
  x = JSON.parse(Http.responseText);

  // D-house
  document.getElementById("d-point").innerHTML = x.values[0][1];
  document.getElementById("d-upcomming").innerHTML = x.values[0][2];

  // A-house
  document.getElementById("a-point").innerHTML = x.values[1][1];
  document.getElementById("a-upcomming").innerHTML = x.values[1][2];

  // H-house
  document.getElementById("h-point").innerHTML = x.values[2][1];
  document.getElementById("h-upcomming").innerHTML = x.values[2][2]

  // M-house
  document.getElementById("m-point").innerHTML = x.values[3][1];
  document.getElementById("m-upcomming").innerHTML = x.values[3][2]

  // F-hosue
  document.getElementById("f-point").innerHTML = x.values[4][1];
  document.getElementById("f-upcomming").innerHTML = x.values[4][2]


}
