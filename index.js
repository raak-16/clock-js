function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  } 

function changebg()
{
ele3=document.getElementById("hi")
let random_number=getRndInteger(1,5);
ele3.style.backgroundImage='url("assets/'+random_number+'.png")';
ele3.style.backgroundSize="cover";


}




function clockingg(){


const ele1=document.getElementById("hourda");
const ele2=document.getElementById("minuteda");




let now=new Date();


ele1.innerHTML=now.getHours();
ele2.innerHTML=now.getMinutes();


}

setInterval(clockingg,1000);



const button=document.getElementById("butto");
button.addEventListener("click",changebg);
