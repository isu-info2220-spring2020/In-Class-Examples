$(document).ready(function () {
    $("#accordion").accordion();
    $(".draggable").draggable();
    $("#sort-me").addClass("ui-selectable")
        .sortable();
    var students = [
        "Porter",
        "Dustin",
        "James",
        "Taylor",
        "Saurav",
        "Saurav",
        "Braeden",
        "Sanjeev"
    ];

    $("#autocomplete").autocomplete({
        source: students
    });

    $("button").button();

    $("#radioset").buttonset();
    $(".datepickable").datepicker();

});