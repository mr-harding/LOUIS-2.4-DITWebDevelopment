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

  localStorage.setItem("houseName", x.values[a][1]);
  localStorage.setItem("blurb", x.values[a][2]);
  localStorage.setItem("point", x.values[a][3]);
  localStorage.setItem("point-blurb", x.values[a][4]);
  localStorage.setItem("upcomming", x.values[a][5]);

}

function redirrectOverall(){
  location.replace("overall.html");

  localStorage.setItem("test6", x.values[7][1]);
  localStorage.setItem("test7", x.values[8][1]);
  localStorage.setItem("test7", x.values[9][1]);
  localStorage.setItem("test9", x.values[10][1]);
  localStorage.setItem("test10", x.values[11][1]);

}


document.getElementById("house-name").innerHTML = localStorage.getItem("houseName");
document.getElementById("house-blurb").innerHTML = localStorage.getItem("blurb");
document.getElementById("point").innerHTML = localStorage.getItem("point");
document.getElementById("point-blurb").innerHTML = localStorage.getItem("point-blurb");
document.getElementById("upcomming").innerHTML = localStorage.getItem("upcomming");

document.getElementById("n1House").innerHTML = localStorage.getItem("test6");
document.getElementById("n2House").innerHTML = localStorage.getItem("test7");
document.getElementById("n3House").innerHTML = localStorage.getItem("test8");
document.getElementById("n4House").innerHTML = localStorage.getItem("test9");
document.getElementById("n5House").innerHTML = localStorage.getItem("test10");
