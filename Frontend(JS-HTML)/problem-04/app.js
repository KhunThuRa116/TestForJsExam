
let x = document.getElementById("numOne");
let y = document.getElementById("numTwo");
let z = document.getElementById("numThree");
let l = document.getElementById("Max");
let m = document.getElementById("Min");
let n = document.getElementById("Odd");
let o = document.getElementById("Even");

function showNo1(){
   let k =  document.getElementById("numOne1");
   k.value = x.value;
}
function showNo2(){
    let j =  document.getElementById("numTwo1");
    j.value = y.value;
 }
 function showNo3(){
    let h =  document.getElementById("numThree1");
    h.value = z.value;
 }


function maxNo(){
    let a =Number(x.value);
    let b =Number(y.value);
    let c =Number(z.value);
    if(a>b && a>c){
        l.value=a;
    }else if(b>c){
        l.value=b;
    }else{
        l.value=c;
    }
}

function minNo(){
    let a =Number(x.value);
    let b =Number(y.value);
    let c =Number(z.value);
    if(a<b && a<c){
        m.value=a;
    }else if(b<c){
        m.value=b;
    }else{
        m.value=c;
    }
}

function oddNo(){
    let a =Number(x.value);
    let b =Number(y.value);
    let c =Number(z.value);

    if(a%2!=0){
        n.value = a ;
        if( b%2!=0 && c%2!=0 ){
            n.value = a + " & " + b + " & " + c;
        }
        else if(c%2!=0){
            n.value = a+" & "+c;
        }else if(b%2!=0) {
            n.value = a+" & "+b ;  
        }
    }else if(b%2!=0){
        n.value = b;
        if(c%2!=0){
            n.value = b+" & "+c ;    
        }
    }else if(a%2==0 && b%2==0 && c%2==0){
        n.value = "There is no Odd Number";
    }else{
        n.value = c;
    }
      
}

function evenNo(){
    let a =Number(x.value);
    let b =Number(y.value);
    let c =Number(z.value);
    if(a%2==0){
        o.value = a ;
        if( b%2==0 && c%2==0 ){
            o.value = a + " & " + b + " & " + c;
        }
        else if(c%2==0){
            o.value = a+" & "+c;
        }else if(b%2==0) {
            o.value = a+" & "+b ;  
        }
    }else if(b%2==0){
        o.value = b;
        if(c%2==0){
            o.value = b+" & "+c ;    
        }
    }else if(a%2!=0 && b%2!=0 && c%2!=0){
        o.value = "There is no Even Number";
    }else{
        o.value = c;
    }
      
}


