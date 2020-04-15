$(document).ready(function () {
    $("#ddlThemes").change(function () {
        setPageTheme("ssPage", this.value);
        if (Storage) {
            // we have storage
            if (this.value === "") {
                sessionStorage.removeItem("theme");
            } else {
                sessionStorage.setItem("theme",
                    this.value);
            }

        }
    });
    //if (Storage) {
    //    // we have storage
    //    var theme = sessionStorage.theme;
    //    if (typeof theme !== "undefined") {
    //        setPageTheme("ssPage", theme);
    //    }
    //}

    $("#btnSaveSettings").click(function () {
        if (Storage) {
            var myName = $("#txtName").val();
            var myTheme = $("#ddlThemes").val();
            var myUser = {
                name: myName,
                theme: myTheme,
                password: "bobisawesome"

            };
            // PII
            // Personally
            // Identifiable
            // Information
            var myUserAsString = JSON.stringify(myUser);
            localStorage.user = myUserAsString;
        }
    });

    setUserData();

});

function setPageTheme(styleID,themeName) {
    $("#" + styleID).attr("href",
        "styles/" + themeName + ".css"
    );
}

function setUserData() {
    if (Storage) {
        if (typeof localStorage["user"]
            !== "undefined") {
            var myUserOut = localStorage["user"];
            var myUserObject = JSON.parse(myUserOut);
            alert("Hello " + myUserObject.name + 
                " I will set your theme for you.");
            setPageTheme("ssPage", myUserObject.theme);

        }
    }
}

