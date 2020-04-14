window.onload = function () {
    var btn = this.document.getElementById("btnAddCookie");
    var btn2 = this.document.getElementById("btnAddCookie2");
    var btnr = this.document.getElementById("btnReadCookie");

    btn.onclick = function () {
        document.cookie = "type=snicker doodle";
        document.cookie = "bigthing=adlskfjaweljfalsdijfoaisefoawhefoiasefilawjeilfaweoifheilfhaeilfasliefweoilfaseiohfaweoifaeiljfaseiljfoaseiljfaweiljfaweoijfaeoijfeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiiiiiiiiiiiiiiiiiiiiiiiiii44444444444444444444444444444"
    };

    btn2.onclick = function () {
        document.cookie = "type=macadamian chip";
        document.cookie = "drink=milk";
    };

    btnr.onclick = function () {
        alert(document.cookie);
    };

    this.document.getElementById("btnSaveName").onclick = function () {
        txt = document.getElementById("txtName");
        document.cookie = "name=" + txt.value;
    };

    var cooks = this.document.cookie;
    var cooksplit = cooks.split(";");
    for (var i = 0; i < cooksplit.length; i++) {
        cookparts = cooksplit[i].split("=");
        if (cookparts[0].trim() === "name") {
            alert("Welcome back " + cookparts[1]);
        }
    }

};