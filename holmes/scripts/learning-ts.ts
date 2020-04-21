var num1: number;
var str1: string = "67";
let badName: boolean = true;

num1 = 6;// "four";
str1 = <string><any>badName;
var boo: number;

badName = 5 > 6;

function my_function(a:number, b:number):string {
    return a + b + "";
}

function my_fun(a: number, b: number = 5, c?: number): number {
    if (typeof c === "undefined") {
        return a + b;
    } else {
        return a + b + c;
    }
}

var val: string = my_function(1, 3);

var num2: number;
num2 = my_fun(3);

class Shape {
    private _height: number;
    private _width: number;

    constructor(h:number,w:number) {
        this._height = h;
        this._width = w;
    }

    get height():number {
        return this._height;
    }
    set height(val: number) {
        if (val < 0) val = 0;
        this._height = val;
    }

    get width(): number {
        return this._width;
    }
    set width(val: number) {
        this._width = val;
    }
}

var circle: Shape;
circle = new Shape(3,4);

circle.height = 45;
alert(circle.height);

interface iRotatable {
    rotate(deg:number):void;
}


class ThreeDShape extends Shape implements iRotatable {
    private _length: number;

    constructor(h: number, w: number, l: number) {
        super(h, w);
        this._length = l;
    }

    rotate(deg:number): void {
        // turns the shape.
    }


}

var cyl = new ThreeDShape(4, 7, 13);
cyl.rotate(30);
alert(JSON.stringify(cyl));



































//badName = 2345;






