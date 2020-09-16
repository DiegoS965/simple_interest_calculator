function read()
{
    var RValue = document.getElementById("rate").value;
    document.getElementById("UserRate").innerHTML = RValue;
}
function compute()
{
    var Principal = document.getElementById("principal").value;
    var Rate = document.getElementById("rate").value;
    var Years = document.getElementById("YearsM").value;
    var Years2 = Number(Years);
    var interest = (Principal*Years*Rate)/100;
    var d = new Date();
    var yearx = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var nY = new Date(yearx + Years2, month, day);
    var FYear = nY.getFullYear();
    document.getElementById("text1").innerHTML = "if your deposit ";
    document.getElementById("result").innerHTML = Principal;
    document.getElementById("text2").innerHTML = ",";
    document.getElementById("text3").innerHTML = "at an interest rate of ";
    document.getElementById("result2").innerHTML = Rate;
    document.getElementById("text4").innerHTML = " %.";
    document.getElementById("text5").innerHTML = "You will receive an amount of ";
    document.getElementById("result3").innerHTML = interest;
    document.getElementById("text6").innerHTML = ",";
    document.getElementById("text7").innerHTML = "in the year ";
    document.getElementById("result4").innerHTML = FYear;
}

function checkdata()
{
    var Principal = document.getElementById("principal");

      //Checks if zero or negative numbers are entered
      if(Principal.value <= 0){
            alert("Enter a positive number");
            Principal.focus();
            return false;
      }
     return true;
}
        