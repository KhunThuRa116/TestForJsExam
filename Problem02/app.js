let firstStr = document.getElementById("firstStrInput");
let secondStr = document.getElementById("secondStrInput");



function concatString(){

    let x = firstStr.value;
    let y = secondStr.value;
    let z = x.concat(" ",y);
    
    let showConcatStr = document.getElementById("showConcatStr");
    showConcatStr.innerText = z;
}

function SearchKeyString1(){
    let keyStrInput = document.getElementById("keyStrInput");
    let searchMsg = keyStrInput.value;
    let h = firstStr.value;
    let showMsg1 = document.getElementById("showMsg1");
    if(h.includes(searchMsg)==true){
        showMsg1.innerText = "Key Exit";
    }else{
        showMsg1.innerText = "Key Doesn't Exit";
    };

}

function SearchKeyString2(){
    let keyStrInput = document.getElementById("keyStrInput");
    let searchMsg = keyStrInput.value;
    let i = secondStr.value;
    let showMsg2 = document.getElementById("showMsg2");
    if(i.includes(searchMsg)==true){
        showMsg2.innerText = "Key Exit";
    }else{
        showMsg2.innerText = "Key Doesn't Exit"
    };
}

function SearchKeyPosition1(){
    let w = firstStr.value;
    let keyPositionInput1 = document.getElementById("keyPosition");
    let g = keyPositionInput1.value
    let showMsg3 = document.getElementById("showMsg3");
    if(g < w.length){
        showMsg3.innerText = w.charAt(g);
    }else{
        showMsg3.innerText = "invalid position";
    }

}





