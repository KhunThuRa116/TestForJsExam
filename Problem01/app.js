  
    let inputText = document.getElementById("inputText");
  
  function showInputData(){
     let showInput  = document.getElementById("showInput");
     showInput.innerText = inputText.value;
    // console.log("hi")
    // console.log(x);
    
  }

  function showLength(){
    let length = inputText.value.length;
    let showLength = document.getElementById("showLength");
    showLength.innerText = length;
  }

  function showFirstChar(){
    let firstChar = inputText.value.slice(0,1);
    let showFirstChar = document.getElementById("showFirstChar");
    showFirstChar.innerText = firstChar;
  }

  function showLastChar(){
    let LastChar = inputText.value.substr(-1);
    let showLastChar = document.getElementById("showLastChar");
    showLastChar.innerText = LastChar;
  }

  function showMiddleChar(){
    let n = inputText.value.length;
    // console.log(n);
    let showMiddleChar = document.getElementById("showMiddleChar");
    let t = n%2;
    let r = n/2;
    if(t==0){
        let MiddleChar1 = inputText.value.slice(r-1,r+1);
        showMiddleChar.innerText = MiddleChar1;
    }else{
        let a = Math.trunc(n/2);
        let MiddleChar2 = inputText.value.slice(a,a+1);
        showMiddleChar.innerText = MiddleChar2;
    }
    
  }


  