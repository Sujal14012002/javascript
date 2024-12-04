console.log("start");

setTimeout(function cb(){
    console.log("callback");
},5000);


let startdate=new Date().getTime();
let endate=startdate;
while(endate<startdate + 10000){
    endate=new Date().getTime();
}

console.log("while expires")