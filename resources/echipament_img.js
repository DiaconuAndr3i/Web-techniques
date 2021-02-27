window.onload = function() {
    var image=document.getElementById("aaa");
    var img_array=["imagini/echip2.jpg","imagini/echip3.jpg","imagini/echip4.jpg","imagini/echip5.jpg","imagini/echip1.jpg"];
    var index=0;
    var interval = 2000;
    function slide() {
        image.src = img_array[index++%img_array.length];
		image.style.display="block";
		image.style.marginLeft="auto";
		image.style.marginRight="auto";
		image.style.width="460px";
		image.style.borderRadius="10px";
		image.style.marginTop="5%";
    }

    setInterval(slide, interval);
}
setInterval("slide()",2000);