﻿window.onload = loadStuff;



function loadStuff() {
    var spn = document.getElementById("spnOne");
    var alink = document.getElementById("hypOne");
    var div = document.getElementById("myDiv");

    alink.onclick = function (e) {
        e = e || window.event;
        alert("A was clicked");
        e.stopPropagation();
        e.cancelBubble = true;
        return false;
    };


    //div.addEventListener("click",
    //    function (e) {
    //        e = e || window.event;
    //        ctrg = e.currentTarget;
    //        alert(this + " +++ " + ctrg);

    //        markStuff(e);
    //        //this.className = "selected";
    //        //alert("div was clicked");
    //    }

    div.onclick = function (e) {
        e = e || window.event;
        ctrg = e.currentTarget;
        alert(this + " +++ " + ctrg);

        markStuff(e);
        //this.className = "selected";
        //alert("div was clicked");
    };
    

    spn.onclick = function () {
        alert("Span was clicked.");
    };


}

function cancelGoogle() {
    alert("no going to google");
    return false;
}
//window.markStuff(event);
function markStuff(evt) {
    evt = evt || window.event;
    trg = evt.target ||
        evt.srcElement; /*most specific thing clicked*/
    ctrg = evt.currentTarget; /*handles event*/

    if (trg.tagName === "P" &&
        trg.className === "magic") {
        trg.innerHTML += "<a href='#paralast'>Go to end</a>";
    } 

    trg.className = "selected";
    ctrg.className = "selectedCurrent";

    
    alert(this + " ### " + ctrg);
    alert(this === ctrg);
}

//document.getElementById("thing")[0];
//document.getElementsByTagName("thing")[0];

function paraClicked(e) {
    //e = e || window.event;
    //trg = e.target || e.srcElement;
    //trg.innerHTML += "<a href='#paralast'>Go to end</a>";
}
