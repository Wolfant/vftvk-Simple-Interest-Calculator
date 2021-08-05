function compute() {
    
    var principal = document.getElementById("principal").value;
    if ( validate(principal) ) {

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseInt(principal) * parseInt(years) * parseInt(rate)/100;
    var year = parseInt(new Date().getFullYear()) + parseInt(years);
    console.log("año " + year + "años " + years)

    amount = principal + interest;

    outText = "\<br\>If you deposit "+
                principal+",\<br\>at an interest rate of "+
                rate+"%\<br\>You will receive an amount of "+
                amount+",\<br\>in the year "+year+"\<br\>"

    document.getElementById("result").innerHTML=outText;
    }
 }
         
 function updateRate(){
     var rateval = document.getElementById("rate").value;
     document.getElementById("rate_val").innerText=rateval;
 }

 function validate(data){
     if (data < 1)  {
         window.alert("Enter a positive number");
         return false
     }
     return true
 }

 