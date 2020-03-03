window.onload = function () {
    sec = this.document.getElementById("section1");
    childs = sec.childNodes;
    //for (var i = 0; i < childs.length; i++) {
    //    f_child = childs[i];
    //    if (f_child.nodeName !== "#text") {
    //        f_child.onclick = function () {
    //            alert("Div " + this.id +
    //                " was clicked.");
    //        };
    //    }
    //    s_childs = f_child.childNodes;
    //    for (var j = 0; j < s_childs.length; j++) {
    //        if (s_childs[j].nodeName !== "#text") {
    //            s_childs[j].onclick = function (e) {
    //                e = e || window.event;
    //                if (this.id === "span_taylor") {
    //                    e.stopPropagation();
    //                    e.cancelBubble = true;
    //                }

    //                alert("Span " + this.id +
    //                    " was clicked.");

    //            };
    //        }
    //    }
    //}
    
    //sec.onclick = function (e) {
    //    alert("Section was clicked.");
    //};

    // ^^^^^^^^^  Event Bubbling
    // Event Delegation

    sec.onclick = function (myEvent) {
        // Cross brower captures -- make sure do do these!
        myEvent = myEvent || window.event;
        trget = myEvent.target ||
            myEvent.srcElement; // Cross browser

        //alert(this.tagName);
        if (trget.tagName === "SPAN") {
            //alert(trget.id);
            if (this.id === "span_taylor") {
                myEvent.stopPropagation();
                myEvent.cancelBubble = true;
            }

            alert("Span " + trget.id +
                " was clicked.");

        }

    };

};