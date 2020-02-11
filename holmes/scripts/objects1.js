
var stud1 = { name : "Taylor", siblings : 3};

stud1.pets = 56;
stud1["lastName"] = "Awesome";


function showMeSomething() {
    alert(stud1.name + " " +
        stud1.lastName + 
        " has "
        + stud1.pets + " pets "
        + " and has " + stud1.siblings +
        " siblings.");
}