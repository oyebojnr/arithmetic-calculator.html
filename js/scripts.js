function add(no1,no2)
{
   let result = no1 + no2;
   return result;
}
function Subtract(no1,no2)
{
   let result = no1 - no2;
   return result;
}
function Multiply(no1,no2)
{
    let result = no1 * no2;
    return result;
}
function Mode(no1,no2)
{
    let result = no1 % no2;
    return result;
}
function Divide(no1,no2)
{
    let result = no1 / no2;
    return result;
}
function Percent(no1,no2)
{
    let result = no1 / no2 * 100;
    return result;
}

// user interface logic starts:

$(document).ready(function(){ 
    $("#btnAdd").click(function(event){
        event.preventDefault();   
        let num1 = $("#txtNo1").val();
        let num2 = $("#txtNo2").val();

        $("#txtNo1").val("");
        $("#txtNo2").val("");

        let no1 = Number(num1);
        let no2 = Number(num2);
        let result = add(no1,no2);
        $(".result").html(result);
    });

    $("#btnSubtract").click(function(event){
        event.preventDefault();   
        let num1 = $("#txtNo1").val();
        let num2 = $("#txtNo2").val();

        $("#txtNo1").val("");
        $("#txtNo2").val("");

        let no1 = Number(num1);
        let no2 = Number(num2);
        let result = Subtract(no1,no2);
        $(".result").html(result);
    });

    $("#btnMultiply").click(function(event){
        event.preventDefault();   
        let num1 = $("#txtNo1").val();
        let num2 = $("#txtNo2").val();

        $("#txtNo1").val("");
        $("#txtNo2").val("");

        let no1 = Number(num1);
        let no2 = Number(num2);
        let result = Multiply(no1,no2);
        $(".result").html(result);
    });

    $("#btnDivide").click(function(event){
        event.preventDefault();   
        let num1 = $("#txtNo1").val();
        let num2 = $("#txtNo2").val();

        $("#txtNo1").val("");
        $("#txtNo2").val("");

        let no1 = Number(num1);
        let no2 = Number(num2);
        let result = Divide(no1,no2);
        $(".result").html(result);
    });

    $("#btnMode").click(function(event){
        event.preventDefault();   
        let num1 = $("#txtNo1").val();
        let num2 = $("#txtNo2").val();

        $("#txtNo1").val("");
        $("#txtNo2").val("");

        let no1 = Number(num1);
        let no2 = Number(num2);
        let result = Mode(no1,no2);
        $(".result").html(result);
    });

    $("#btnPercentage").click(function(event){
        event.preventDefault();   
        let num1 = $("#txtNo1").val();
        let num2 = $("#txtNo2").val();

        $("#txtNo1").val("");
        $("#txtNo2").val("");

        let no1 = Number(num1);
        let no2 = Number(num2);
        let result = Percent(no1,no2);
        $(".result").html(result);
    });
    });