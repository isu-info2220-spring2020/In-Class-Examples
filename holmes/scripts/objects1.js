
var stud1 = { name : "Taylor", siblings : 3};

stud1.pets = 56;
stud1["lastName"] = "Awesome";

var stud2 = Object.create(stud1);


function showMeSomething() {
    //stud2.pets = "twelve";
    //stud2.__proto__.movie = "Emperor's New Groove";
    ////alert(stud1.name + " | " + stud2.name);

    //alert(stud1.movie);

    var stud3 = Object.create(stud1);
    var stud4 = Object.create(stud3);
    var stud5 = Object.create(stud2);

    stud1.lastName = "Smith";
    stud2.lastName = "James";
    var arr = [stud1.lastName, stud2.lastName, stud3.lastName,
        stud4.lastName, stud5.lastName];
    alert(arr);


    //alert(stud1.name + " " +
    //    stud1.lastName + 
    //    " has "
    //    + stud1.pets + " pets "
    //    + " and has " + stud1.siblings +
    //    " siblings.");
}



