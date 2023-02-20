let x = document.getElementById("inputNo");

function Multiple(multiple){
    x.value = x.value * multiple;
    // x.value = Math.pow(x.value,multiple);

    if(x.value>100){
        x.value=1;
    }
}