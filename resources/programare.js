function validateForm() {
  var y = document.forms["myForm"]["field4"].value;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(y)==false){
  alert("Mail gresit");
  return false;
  }
  var x = document.forms["myForm"]["field1"].value;
  if (x == "") {
    alert("Campul Nume nu poate lipsi");
    return false;
  }
  var x = document.forms["myForm"]["field2"].value;
  if (x == "") {
    alert("Campul Prenume nu poate lipsi");
    return false;
  }
  var x = document.forms["myForm"]["field3"].value;
  if (x == "") {
    alert("Campul Telefon nu poate lipsi");
    return false;
  }
  var x = document.forms["myForm"]["field7"].value;
  if (x == "") {
    alert("Campul Data programarii nu poate lipsi");
    return false;
  }
}