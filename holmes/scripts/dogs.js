$(document).ready(function(){
    $("#btnLoadDogs").click(function () {
        $.ajax({
            url: "data/dogs.json"
            , method: "get"
            , success: function (data) {
                for (var ndx = 0; ndx < data.length; ndx++) {
                    var dog = data[ndx];
                    addDog(dog.name, dog.breed);
                    addDogNative(dog.name, dog.breed);
                }
            }
            , error: function () {
                addDog("Error");        
            }
        });
    });
});

function addDog(name) {
    var li = $("<li>");
    li.text(name);
    var spn = $("<span>");
    spn.text(arguments[1] + ": ");
    li.prepend(spn);
    $("#ulDogs").append(li);
}

function addDogNative(name) {
    var li = document.createElement("li");
    var spn = document.createElement("span");
    spn.innerText = arguments[1] + ": ";
    //var nameNode = document.createTextNode(name);
    //li.appendChild(spn);
    //li.appendChild(nameNode);
    li.appendChild(spn);
    alert(li.innerHTML);
    name = "<p>" + name + "</p>";
    li.innerText += name;
    alert(li.innerHTML);
    var ul = document.getElementById("ulDogs");
    ul.appendChild(li);
}