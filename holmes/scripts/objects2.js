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


function outPut(aValue) {
    var str = "";
    str += "Apple\n";
    str += aValue + aValue;
    alert(str);
}

//outPut("Banana");
//outPut(21);


function Animal(aniName) {
    this.name = aniName;
    this.getName = GetName;

    function GetName() {
        var name = "oops";
        return "Boo " + this.name;
    }
}

var an1 = new Animal("Hoo");
var animalHolder = new Animal();

alert(an1.getName());
