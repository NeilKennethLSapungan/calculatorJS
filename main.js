
 function dis(val) 
 { 
     document.getElementById("outputResult").value+=val 
 } 
   
 function solve() 
 { 
     let x = document.getElementById("outputResult").value 
     let y = eval(x) 
     document.getElementById("outputResult").value = y 
 } 
    
 function clr() 
 { 
     document.getElementById("outputResult").value = "" 
 } 