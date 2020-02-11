
function one(val) {
    alert(val);
}

function one() {
    alert("Sanjeev");
}

//one("Dustin","Saurav" , "Saurav","Sanjeev");

function one() {
    //alert("Saurav" + "Saurav");
    //alert(arguments[0] + arguments[4] + arguments[3]);
    //alert(arguments);
    alert(arguments[0] + arguments[2] + arguments[3]);

}

var happy = function () { alert("Happy"); };

function boo() {
    alert("Scooby");
}


//boo();
//happy();


var color = function () { return "blue"; };
function shape() {
    var retStr = "";
    for (var i = 0; i < 5; i++) {
        retStr += i;
    }
    return "square" + retStr;
}

var shape2 = shape;

alert(color());
alert(shape());
alert(shape2);