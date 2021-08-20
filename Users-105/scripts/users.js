console.log("Users register");
//global variable 
var x=10;
function sum(a,b){
    let result=a+b;
    console.log("result"+(a+b));
}


function init(){
    console.log("init function");
    sum(12,15);

}

window.onload=init;