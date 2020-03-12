//window.onload = function () {
//    //$("p").text("Thirdish");
//    //$(".second").text("Second");
//    //$("#paraOne").text("One");
//};


//$(document).ready(function () {
//    alert("Hello");
//});

$(document).ready(function () {
    $("#paraOne").click(function () {
        alert("para One was clicked");
    });
    $(".second").click(paraHandle);
    $("p").before("<span>I was added before.</span>");
    $("p").prepend("<span>I was added prepended.</span>");
    $("p").append("<span>I was added appened.</span>");
    $("p").after("<span>I was added after.</span>");
    $("p#paraOne").remove();
    $("p.second span:first").remove();
    $("p").empty();
});

function paraHandle() {
    alert("I was clicked too");
}