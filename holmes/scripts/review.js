function Student(name,age) {
    this.name = name;
    this.age = age;
}

var litObj = { name: "Frank", age: 45 };
var funObj = new Student("Sally", 25);

alert(litObj.name);
alert(funObj.name);