jQuery(document).ready(function(){
    $("#tekst").click(function(){
        //$("#lorem").toggle();
        //$("#lorem").toggle("slow");
        //$("#lorem").toggle("normal");
        //$("#lorem").toggle("fast");
        $("#lorem").toggle(100);
        $("div").css("background","yellow");
        $(".tekst").css("background","teal");
        $("#id1").css("background","grey");
        $("#id2").css("color","orange");
        $("#id1").css({"background":"white","color":"red"});
        $("p").css("font-family","arial","verdana");
        $("p").css({"color":"red","font-size":"120%"});
    })
    $("#zm").click(function(){
       $("p").css("color","lime")
    });

    $('a').css('color', 'green');
    $("#link a").css("color", "red");

});

