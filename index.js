let exp='';
let output='';
let dexp=document.querySelector(".exp");
let dans=document.querySelector(".ans")
function btn(val){
    console.log(val.innerHTML);
    
         exp+=val.innerHTML
        dexp.innerHTML=exp
    
}

function evaluating(){
    let ans=eval(exp);
    dans.innerHTML=ans;
    
}

function clearr(){
    exp='';
    ans=''
    exp.innerHTML=''
    dexp.innerHTML=''
    dans.innerHTML=''
    console.log('da');
}

function backk()
{
    exp=exp.slice(0,-1);
    dexp.innerHTML=exp
}