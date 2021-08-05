function compute() {
    
    var principal = document.getElementById("principal").value;
    if ( validate(principal) ) {

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseInt(principal) * parseInt(years) * parseInt(rate)/100;
    var year = parseInt(new Date().getFullYear()) + parseInt(years);
    
    amount = parseInt(principal) + parseInt(interest);

    outText = "\<br\>If you deposit <mark>"+
                principal+"</mark>,\<br\>at an interest rate of <mark>"+
                rate+"%</mark>\<br\>You will receive an amount of <mark>"+
                amount+"</mark>,\<br\>in the year <mark>"+year+"\<br\>"

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

 