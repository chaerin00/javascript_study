function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

const imageSlider=document.getElementById("imageSlider");
let i=1;
let imageURL=`tulip${i}.jpeg`;
const pre=()=>{
    if(i<=1)i=5;
    else i-=1;
    imageURL=`tulip${i}.jpeg`;
    imageSlider.style.backgroundImage=`url('./images/${imageURL}')`;
}
const next=()=>{
    if(i>=5)i=1;
    else i+=1;
    imageURL=`tulip${i}.jpeg`;
    imageSlider.style.backgroundImage=`url('./images/${imageURL}')`;
}