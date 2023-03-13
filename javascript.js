let display=document.getElementById('result');
   

function dis(val){
 
    display.value += val;
   

}

function sresult(){
 
    let x=eval(display.value);
    display.value=x;

}

function del(){
  
    display.value="";
}

function rem(){
  
    display.value=display.value.substring(0,display.value.length-1);

}

function sqrt(){
   
    display.value=Math.sqrt(display.value);
}

function square(){
    display.value=Math.pow(display.value,2);
}

function log(){
    display.value=Math.log10(display.value);
}

function ln(){
    display.value=Math.log(display.value);
}

function trigonometry(){
  let a =document.getElementById("trigo").value;

  if( a == 'sinx'){
    sin();
  }
  else if( a == 'cosx')
  {
    cos();
  }else if( a == 'tanx')
  {
    tan();
  }
  
}

function functions(){
    let b =document.getElementById("functions").value;
  
    if( b == 'abs'){
      abs();
    }
    else if( b == 'floor')
    {
      floor();
    }else if( b == 'ceil')
    {
      ceil();
    }
    
  }


function abs(){
    display.value=Math.abs(display.value);
}

function floor(){
    display.value=Math.floor(display.value);
}

function ceil(){
    display.value=Math.ceil(display.value);
}

function sin(){
    display.value=Math.sin(display.value * Math.PI/180).toFixed(2);
    
}

function cos(){
    display.value=Math.cos(display.value * Math.PI/180).toFixed(2);
}

function tan(){
    display.value=Math.tan(display.value * Math.PI/180).toFixed(2);
}

function exp(){
    display.value=Math.exp(display.value);
}

function factorial(){
    var result=1;

    if(display.value === 0){
        display.value = "1";
    }
    else if(display.value === 1){
        display.value = "not defined";
    }

    else {
        var result=1;
        for(var i=display.value ;i>0 ;i--){
            result =result * i;
        }

        display.value=result;
    }
}

function plusminus(){
    if(display.value.charAt(0) === '-'){
        display.value=display.value.slice(-1);
    }
    else{
        display.value="-"+display.value;
    }
}

function inverse(){
    display.value=1/display.value;
}

function power(){
    display.value=Math.pow(10,display.value);
}

function twoToN(){
    display.value=Math.pow(2,display.value);
}

function pi(){
    const pi=3.14159265359;

    if(display.value === ''){
        display.value=pi;
    }
    else{
        display.value=display.value*pi;
    }
}

function e(){
    const e=2.718281828459045;

    if(display.value === ''){
        display.value=e;
    }
    else{
        display.value=display.value*e;
    }
}

function deg(){
    display.value=((180/Math.PI)*display.value).toFixed(2);
}

function fe(){
    display.value=Number.parseFloat(display.value).toExponential();
}

function mc(){
    localStorage.removeItem("memory");
}

function mr(){
     display.value=localStorage.getItem("memory");
}

function mPlus(){
    display.value=eval(localStorage.getItem("memory") + "+" + display.value);
    localStorage.setItem("memory",display.value);
    document.getElementById("memoryClear").disabled=false;
    document.getElementById("memoryRecall").disabled=false;
}

function mMinus(){
    display.value=eval(localStorage.getItem("memory") + "-" + display.value);
    localStorage.setItem("memory",display.value);
    document.getElementById("memoryClear").disabled=false;
    document.getElementById("memoryRecall").disabled=false;
}

function ms(){
    localStorage.setItem("memory",display.value);
    document.getElementById("memoryClear").disabled=false;
    document.getElementById("memoryRecall").disabled=false;
}


