//class Person()
function Person(){ // this is functional object
    this.firstName = "Bob";
    var lastName = "Awesome";
    //alert(lastName);
}

function thisIsMagic() { // this is function
    var myNum = 12;
    myOther = 234;

}

function Pet(name, type) {
    this.name = name;
    this.typeOfAnimal = type;
    this.out = outside;
    this.makeNoise = makeMoreNoise;
    this.makeSound = function () {
        return "Bark";
    };


    function makeMoreNoise() {
        return "Howwwwl";
    }

}

function outside() {
    return "out";
    
}


function somethingElse() {

    var bob = new Person();
    var pet = new Pet("Diesel","Dog");
    alert(bob.firstName);

}

