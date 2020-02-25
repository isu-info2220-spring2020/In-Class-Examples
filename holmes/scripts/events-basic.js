// fires when the widnow loads.
//window.onload = function () {
//    alert("Window Loaded");
//};

window.onload = windowLoad;

function windowLoad() {
    //alert("Window still loaded");

    //var ani = new Animal("fido");
    //ani.name = "fluffy";

    var btn = document.getElementById("myButton");
    //alert(btn);
    btn.onclick = function () {
        alert("in JS");
    };
    btn.addEventListener("click", function () {
        alert("in JS 2");
    });
    btn.addEventListener("click", btn_click);
    btn.onclick = function () {
        alert("in JS 4");
    };

    btn.onmouseenter = mouseHere;

}

function btn_click() {
    alert("in JS 3");
}

function mouseHere(e) {
    e = e || window.event;
    alert(e.x + " | " + e.y);
}


////alert("did I load");
//var btn = document.getElementById("myButton");
////alert(btn);
//btn.onclick = function () {
//    alert("in JS");
//};
