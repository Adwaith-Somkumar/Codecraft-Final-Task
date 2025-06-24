const inputbox= document.getElementById("inputbox");
const list= document.getElementById("list");


function addtask(){
    if(inputbox.value=="")
    {
        alert("You Must Write Something!!");
    }
    else{
        
        let li=document.createElement("li");
         li.innerHTML=  inputbox.value;
       
       
         list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputbox.value="";

}

list.addEventListener( "click" , function(e){

     if(e.target.tagName === "LI")
        e.target.classList.toggle("checked");


    else if(e.target.tagName === "SPAN")
        e.target.parentElement.remove();

},false);


