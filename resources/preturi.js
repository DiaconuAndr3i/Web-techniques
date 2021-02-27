function articole(){
	var x=document.getElementsByClassName("art");
	for(var item=0;item<=x.length;item++){
	x[item].style.backgroundColor=culoareRandom();
	x[item].style.width="95%";
	x[item].style.margin="auto";
	x[item].style.fontFamily = "Comic Sans MS, cursive, sans-serif";
	x[item].style.fontSize = "100%"
	x[item].style.borderRadius = "10px";
	x[item].style.color="white";
	}
};

function numarRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function culoareRandom(){
 return "rgb(" + numarRandom(0, 210) + ", " + numarRandom(0, 210) + ", " + numarRandom(0, 210) + ")";
}

window.onload=function(){
	
	let t=document.getElementById("bara_pret");
	var style=getComputedStyle(t);
	var btn = document.createElement("BUTTON");
	document.getElementById("par1").appendChild(btn);
	btn.id="bt"+1;
	bt1.innerHTML="+";
	bt1.style.backgroundColor=style.color;
	bt1.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	var btn = document.createElement("BUTTON");
	document.getElementById("par2").appendChild(btn);
	btn.id="bt"+2;
	bt2.innerHTML="+";
	bt2.style.backgroundColor=style.color;
	bt2.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	var btn = document.createElement("BUTTON");
	document.getElementById("par3").appendChild(btn);
	btn.id="bt"+3;
	bt3.innerHTML="+";
	bt3.style.backgroundColor=style.color;
	bt3.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	var btn = document.createElement("BUTTON");
	document.getElementById("par4").appendChild(btn);
	btn.id="bt"+4;
	bt4.innerHTML="+";
	bt4.style.backgroundColor=style.color;
	bt4.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	var btn = document.createElement("BUTTON");
	document.getElementById("par5").appendChild(btn);
	btn.id="bt"+5;
	bt5.innerHTML="+";
	bt5.style.backgroundColor=style.color;
	bt5.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	var btn = document.createElement("BUTTON");
	document.getElementById("par6").appendChild(btn);
	btn.id="bt"+6;
	bt6.innerHTML="+";
	bt6.style.backgroundColor=style.color;
	bt6.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	var btn = document.createElement("BUTTON");
	document.getElementById("par7").appendChild(btn);
	btn.id="bt"+7;
	bt7.innerHTML="+";
	bt7.style.backgroundColor=style.color;
	bt7.style.border="2px solid #EBF1FF";
	btn.onclick=function(event){event.stopPropagation();}
	
	articole();
};


function adauga(n){
	var x = document.getElementById("rasp"+n);
	if (x.style.display === "none") {
    x.style.display = "block";
	var bt=document.getElementById("bt"+n);
	bt.innerHTML="-";
	var elem = document.createElement("img");
	elem.src="imagini/poza_"+n+".jpg";
	elem.id="poza"+n;
	elem.classList.add("imagini");
	x.appendChild(elem);
	
  } else {
    x.style.display="none";
	var bt=document.getElementById("bt"+n);
	bt.innerHTML="+";
	var elem=document.getElementById("poza"+n);
	elem.remove();
	}
};

