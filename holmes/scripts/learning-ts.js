var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num1;
var str1 = "67";
var badName = true;
num1 = 6; // "four";
str1 = badName;
var boo;
badName = 5 > 6;
function my_function(a, b) {
    return a + b + "";
}
function my_fun(a, b, c) {
    if (b === void 0) { b = 5; }
    if (typeof c === "undefined") {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
var val = my_function(1, 3);
var num2;
num2 = my_fun(3);
var Shape = /** @class */ (function () {
    function Shape(h, w) {
        this._height = h;
        this._width = w;
    }
    Object.defineProperty(Shape.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            if (val < 0)
                val = 0;
            this._height = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            this._width = val;
        },
        enumerable: true,
        configurable: true
    });
    return Shape;
}());
var circle;
circle = new Shape(3, 4);
circle.height = 45;
alert(circle.height);
var ThreeDShape = /** @class */ (function (_super) {
    __extends(ThreeDShape, _super);
    function ThreeDShape(h, w, l) {
        var _this = _super.call(this, h, w) || this;
        _this._length = l;
        return _this;
    }
    ThreeDShape.prototype.rotate = function (deg) {
        // turns the shape.
    };
    return ThreeDShape;
}(Shape));
var cyl = new ThreeDShape(4, 7, 13);
cyl.rotate(30);
alert(JSON.stringify(cyl));
//badName = 2345;
//# sourceMappingURL=learning-ts.js.map