$(document).ready(function(){

    var panels = [];

    $(this).on("click", "button", function(){

        var panel = {
            name: "<h1 class=\"name\">"+$("#firstName").val()+" "+$("#lastName").val()+"</h1>",
            description: "<p hidden class=\"description\">"+$("#description").val()+"</p>"
        };

        panels.push(panel);

        $("#right").append("<div class=\"panel\">"+panel.name+panel.description+"</div>");
    });

    $(this).on("click", ".panel", function(){
        $(this).find(".name").toggle();
        $(this).find(".description").toggle();
    });

});
