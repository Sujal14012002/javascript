function x(){
    for (var i=1;i<=5;i++){

        setTimeout(function(){
            console.log(i);
        },1000*i);

    }
    console.log("namaste-javascript");
}
x();