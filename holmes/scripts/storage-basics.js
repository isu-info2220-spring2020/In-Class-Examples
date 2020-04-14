window.onload = function () {
    //var btnSave = this.document.getElementById("btnSave");

    if (Storage) {
        // we have storage
        this.localStorage.setItem("name", "Bob");
        this.localStorage["age"] = 89;
        this.localStorage.color = "Red";

        alert(this.localStorage.name);
        alert(this.localStorage["color"]);
        alert(this.localStorage.getItem("age"));


    } else {
        //Oops no storage
    }

};