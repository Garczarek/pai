$(document).ready(function(){
    /*$("tr:even").css("background","#b2aaaa");
    $("tr:odd").css("background","#e3fdff");*/
    $("#tabela tr:even").css("background","#b2aaaa");
    $("#tabela tr:odd").css("background","#e3fdff");
    $("#tabela tr:last").css("background","lime");
    $("#tabela tr:first").css("background","lime");
    $("#tabela tr:eq(2)").css("background","lime");
    $('#tabela td:contains("Sól")').css("background","red");
});
