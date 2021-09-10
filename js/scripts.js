function Add(){    
    var no1=parseInt($("#txtNo1").val());    
    var no2=parseInt($("#txtNo2").val());    
    var result =no1+no2;       
    $(".result").html(result); 
}    
function Substract(){    
    var no1=parseInt($("#txtNo1").val());    
    var no2=parseInt($("#txtNo2").val());    
    var result =no1-no2;  
    $(".result").html(result); 
}    
function Multiply(){    
    var no1=parseInt($("#txtNo1").val());    
    var no2=parseInt($("#txtNo2").val());    
    var result =no1*no2;   
    $(".result").html(result); 
}    
function Divide(){    
    var no1=parseInt($("#txtNo1").val());    
    var no2=parseInt($("#txtNo2").val());    
    var result =no1/no2;
    $(".result").html(result);  
}
function Mode(){    
    var no1=parseInt($("#txtNo1").val());    
    var no2=parseInt($("#txtNo2").val());    
    var result =no1%no2;
    $(".result").html(result); 
}
$(document).ready(function(){    
    $("#btnAdd").on('click',function(){    
        Add();    
    });    
    $("#btnSubstract").on('click',function(){    
        Substract();    
    })    
    $("#btnMultiply").on('click',function(){    
        Multiply();    
    })    
    $("#btnDivide").on('click',function(){    
        Divide();
    });
    $("#btnMode").on('click',function(){    
        Mode();
    });
});