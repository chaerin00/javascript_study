const div=document.getElementById("div");
div.style.textAlign="center";
div.style.display="block";
div.style.marginTop="10%";
let result="";
const getstar=(num)=>{
    for(var i=1;i<=num;i++){
        for(var j=0;j<i;j++){
            result+='*';
        }result+="\n";
    }
    for(var m=num-1;m>=1;m--){
        for(var n=m;n>=1;n--){
            result+='*';
        }result+="\n";
    }
    return result;
};
let num=prompt("숫자입력");
div.innerText=getstar(num);

