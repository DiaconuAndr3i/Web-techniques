window.onload=function(){
var l = Date.parse(localStorage.getItem('d'));
var ll = Date.parse(localStorage.getItem('n'));
var days = ((ll-l) / (60*60*24*1000));
if(days>=1) localStorage.clear();
//localStorage.clear();
if (localStorage.getItem('cheie') === null){
localStorage.setItem('cheie','0');
var d = new Date();
localStorage.setItem('d',d);
}
var x=parseInt(localStorage.getItem('cheie'))+1;
localStorage.setItem('cheie',x);
var n = new Date();
localStorage.setItem('n',n);
}

function accesari() {
  alert('Numarul de accesari intr-o zi: '+ localStorage.getItem('cheie'));
}