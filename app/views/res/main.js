$(document).ready(function(){
    //$(".in1").html("<% include signInNav %>");
    $(".vt").click(function(){
        $(this).addClass("dis");
       
    });
    
    $(".addField").click(function(){
        //alert("ok");
        var ap = "<input id=\"option2\" type=\"text\" placeholder=\"Add Option\" class=\"form-control\" name=\"option\">";
        $(".addOptions").append(ap);
    });
    
    $(".sub").click(function(){
        alert("Vote Added Successfully!");
        window.open("/", "_self");
    });
});