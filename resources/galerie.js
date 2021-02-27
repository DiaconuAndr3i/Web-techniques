var a = 1;
showDivs1(a);

function plusDivs1(z) {
  showDivs1(a += z);
}

function showDivs1(z) {
  var u = document.getElementsByClassName("poze_gal_der");
  if (z > u.length) {a = 1}
  if (z < 1) {a = u.length}
  for (var i = 0; i < u.length; i++) {
    u[i].style.display = "none";  
  }
  u[a-1].style.display = "block";  
}