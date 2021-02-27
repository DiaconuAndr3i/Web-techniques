function myFunction(n) {
  var x = document.getElementById("rasp"+n);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}