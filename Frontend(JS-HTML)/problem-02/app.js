let x = document.getElementById("ipNumber");


function increaseOne(){
    if(x.value>=10){
        x.value = 0;
    }else{
        x.value =  Number(x.value) + 1;
    };
}
function decreaseOne(){
    if(x.value<=0){
        x.value = 10;
    }else{
        x.value =  Number(x.value) - 1;
    };
}