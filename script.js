let div4=document.querySelector("#div4");
let div5=document.querySelector("#div5");
let div6=document.querySelector("#div6");

let originalColors = {
    div4: div4.style.backgroundColor,
    div5: div5.style.backgroundColor,
    div6: div6.style.backgroundColor
};

div4.addEventListener("mouseenter",()=>{
    div4.style.backgroundColor="black";
    div5.style.backgroundColor="blue";
    div6.style.backgroundColor="orange"; 
})
div4.addEventListener("mouseleave", () => {
    div4.style.backgroundColor = originalColors.div4;
    div5.style.backgroundColor = originalColors.div5;
    div6.style.backgroundColor = originalColors.div6; 
});
div5.addEventListener("mouseenter",()=>{
    div4.style.backgroundColor="green";
    div5.style.backgroundColor="yellow";
    div6.style.backgroundColor="purple"; 
})
div5.addEventListener("mouseleave", () => {
    div4.style.backgroundColor = originalColors.div4;
    div5.style.backgroundColor = originalColors.div5;
    div6.style.backgroundColor = originalColors.div6; 
});
div6.addEventListener("mouseenter",()=>{
    div4.style.backgroundColor="brown";
    div5.style.backgroundColor="white";
    div6.style.backgroundColor="saffron"; 
})
div6.addEventListener("mouseleave", () => {
    div4.style.backgroundColor = originalColors.div4;
    div5.style.backgroundColor = originalColors.div5;
    div6.style.backgroundColor = originalColors.div6; 
});


let currNode="light";
let modeButton=document.querySelector("#node");
modeButton.addEventListener("click",()=>{
    console.log("you are trying to change the mode");
    if(currNode==="light"){
        currNode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currNode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currNode);
})