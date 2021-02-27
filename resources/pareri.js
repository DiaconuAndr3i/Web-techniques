var b = 1;
showDivs2(b);

function plusDivs2(m) {
  showDivs2(b += m);
}

function showDivs2(m) {
  var c = document.getElementsByClassName("opinii");
  if (m > c.length) {b = 1}
  if (m < 1) {b = c.length}
  for (var i = 0; i < c.length; i++) {
    c[i].style.display = "none";  
  }
  c[b-1].style.display = "block";  
}