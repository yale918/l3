var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.model = 'GQSM-X';
        this.color = color;
    }
    Car.prototype.getDescription = function () {
        return "\u578B\u865F\u662F: " + this.model + " (" + this.color + ")";
    };
    return Car;
}());
var redCar = new Car('red');
var blueCar = new Car('blue');
console.log(redCar.getDescription());
console.log(blueCar.getDescription());
var CarII = /** @class */ (function (_super) {
    __extends(CarII, _super);
    function CarII() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarII.prototype.getModel = function () {
        return this.model;
    };
    CarII.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + " (II)";
    };
    return CarII;
}(Car));
var redCarII = new CarII('red');
console.log(redCarII.getDescription());
console.log(redCarII.getModel());
