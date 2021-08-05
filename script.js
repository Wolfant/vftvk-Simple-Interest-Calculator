function compute() {
    
    var principal = document.getElementById("principal").value;
    if ( validate(principal) ) {

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseInt(principal) * parseInt(years) * parseInt(rate)/100;
    var year = parseInt(new Date().getFullYear()) + parseInt(years);
    
    amount = parseInt(principal) + parseInt(interest);

    outText = "\<br\>If you deposit <strong>"+
                principal+"</strong>,\<br\>at an interest rate of <strong>"+
                rate+"%</strong>\<br\>You will receive an amount of <strong>"+
                amount+"</strong>,\<br\>in the year <strong>"+year+"\<br\>"

    document.getElementById("result").innerHTML=outText;
    }
    else {
        document.getElementById("principal").focus();
    } 
 }
         
 function updateRate(){
     var rateval = document.getElementById("rate").value;
     document.getElementById("rate_val").innerText=rateval+"%";
 }

 function validate(data){
     if (data < 1)  {
         window.alert("Enter a positive number");
         return false
     }
     return true
 }

 