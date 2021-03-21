const para =document.querySelectorAll(".parallex");

window.addEventListener("scroll",function()
{
    let offset =window.pageYOffset;
    para.forEach(function(prllx,i){
        prllx.style.backgroundPositionY=(offset-prllx.offsetTop)*0.7 + "px"
    })
    
})



window.onload = function(){ 
    // your code 
    var img=document.getElementById("c-img");
var text=document.getElementById("c-para");
var ul=document.getElementById("sec-4-button");
var li=ul.getElementsByTagName("li")
var id0=document.getElementById("id0");
var id1=document.getElementById("id1");
var id2=document.getElementById("id2");
var id3=document.getElementById("id3");

id1.onclick=function(){
    text.innerHTML="Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique."
    img.setAttribute("src","../img/2nd-tab.jpg")
    li[1].style.borderColor="#ff7d27";
    id1.style.color="white";
    li[0].style.borderColor="white";
    id0.style.color="#ff7d27";
    li[2].style.borderColor="white";
    id2.style.color="#ff7d27";
    li[3].style.borderColor="white";
    id3.style.color="#ff7d27";
};
id0.onclick=function(){
    text.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quibusdam quasi consequuntur, natus doloremque sint odio?"
    img.setAttribute("src","../img/1st-tab.jpg")
    li[0].style.borderColor="#ff7d27";
    id0.style.color="white";
    li[1].style.borderColor="white";
    id1.style.color="#ff7d27";
    li[2].style.borderColor="white";
    id2.style.color="#ff7d27";
    li[3].style.borderColor="white";
    id3.style.color="#ff7d27";
};
id2.onclick=function(){
    text.innerHTML="lAliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis."
    img.setAttribute("src","../img/3rd-tab.jpg")
    li[2].style.borderColor="#ff7d27";
    id2.style.color="white";
    li[0].style.borderColor="white";
    id0.style.color="#ff7d27";
    li[1].style.borderColor="white";
    id1.style.color="#ff7d27";
    li[3].style.borderColor="white";
    id3.style.color="#ff7d27";
};
id3.onclick=function(){
    text.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis."
    img.setAttribute("src","../img/4th-tab.jpg")
    li[3].style.borderColor="#ff7d27";
    id3.style.color="white";
    li[0].style.borderColor="white";
    id0.style.color="#ff7d27";
    li[1].style.borderColor="white";
    id1.style.color="#ff7d27";
    li[2].style.borderColor="white";
    id2.style.color="#ff7d27";
};


};

