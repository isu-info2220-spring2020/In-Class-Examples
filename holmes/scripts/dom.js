
//alert(document);

var hypGo = document.getElementById("hypGoogle");
//alert(hypGo.innerText);

var sec = document.getElementById("moreContent");
//alert(sec.tagName);
//alert(sec.innerText);
//alert(sec.innerHTML);

//alert(sec.outerText);
//alert(sec.outerHTML);

//var lis = document.getElementsByTagName("li");
////alert(lis);
//for (var ndx = 0; ndx < lis.length; ndx++) {
//    alert(lis[ndx].outerHTML);
//}

var newTextNode = document.createTextNode("new Text");
//alert(newTextNode);
hypGo.appendChild(newTextNode);

var liPar = hypGo.parentNode.parentNode;


var newNode = document.createElement("li");
//newNode.innerText = "New Node";
newNode.appendChild(newTextNode);
//alert(newNode);
liPar.appendChild(newNode);

function button_Click() {
    var newText = document.createTextNode("New Text");
    var thisButton = document.getElementById("myButton");
    thisButton.appendChild(newText);
    thisButton.setAttribute("class", "hoopy");
    thisButton.className = "nothing";
}

var firstChild = liPar.childNodes[0]; // UL -> first child.
alert(firstChild);
alert(firstChild.nextSibling);
alert(firstChild.nextSibling.nextSibling);
alert(firstChild.nextSibling.nextSibling.nextSibling);
