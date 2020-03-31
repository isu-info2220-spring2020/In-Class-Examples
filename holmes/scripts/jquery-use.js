//window.onload = function () {
//    //$("p").text("Thirdish");
//    //$(".second").text("Second");
//    //$("#paraOne").text("One");
//};


//$(document).ready(function () {
//    alert("Hello");
//});

$(document).ready(function () {
    //$("span").click(function () {
    //    alert("I happened");
    //});
    //alert("I stopped.");
    //var span = document.getElementsByTagName("span");
    //for (var i = 0; i < length; i++) {
    //    span[i].onclick = function () {
    //        alert("I happened");
    //    };
    //}

    $(".second").click(paraHandle);
    //$("p").before("<span>I was added before.</span>");
    //$("p").prepend("<span>I was added prepended.</span>");
    //$("p").append("<span>I was added appened.</span>");
    //$("p").after("<span>I was added after.</span>");

    ////$("p#paraOne").remove();
    ////$("p.second span:first").remove();
    //$("p").empty();
    //var arr = [1, 2, 3];
    //var spans = $("p");

    //var jspn = spans.eq(1);
    //jspn.hide(3000);

    //var spn = spans[0];
    //$(spn).hide(2000);

    //$("p.second").find("span").first().addClass("selected").hide(2000).show(3000);
    //alert(spn + jspn);

    //var par = $("#baboon").parents();
    //var parNode = node.parentNode;
    //var par = $("li").parent().addClass("selected");

    //$(".school").parent().children().addClass("selected");
    //$(".school").addClass("selected")
    //    .siblings().addClass("selected");
    $("#fruit").parent().click(function () {
        var li = $(this);
        li.find("li").addClass("selected");
        //    name.children("ul").children().toggle();
    });

});

function paraHandle() {
    alert("I was clicked too");
    $("p").before("<span>I was added before.</span>");
    $("p").prepend("<span>I was added prepended.</span>");
    $("p").append("<span>I was added appened.</span>");
    $("p").after("<span>I was added after.</span>");
}