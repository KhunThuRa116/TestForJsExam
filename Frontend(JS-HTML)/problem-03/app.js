let inputText = document.getElementById("inputText");
let changeText = document.getElementsByClassName("changeToUpperCase");
// console.log(changeText[0].innerText.toUpperCase());
// let UpperCaseShift = document.getElementById("upperCaseShift").checked;


// if(document.getElementById("upperCaseShift").checked){
// }

function big(){
    if(document.getElementById("upperCaseShift").checked){
        for (i=0;i<changeText.length;i++){
            changeText[i].innerText = changeText[i].innerText.toUpperCase();
            }
    }else{
        for (i=0;i<changeText.length;i++){
            changeText[i].innerText = changeText[i].innerText.toLowerCase();
            }
    }
    

}

function clickInput(x){
    if(document.getElementById("upperCaseShift").checked){
    // changeText[0].innerText = changeText[0].innerText.toUpperCase();
    // changeText[0].innerText = "A";

        inputText.value += x.toUpperCase();
        // alert("hi");
    }else{
        inputText.value = inputText.value + x;
    }
       
}

function clearAlp(){
    // inputText.value = inputText.value.substring(0,-1);
    inputText.value = "";

}

function deleteAlp(){
    inputText.value = inputText.value.substr(0,(inputText.value.length-1));
}