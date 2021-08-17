class Car {
  public model: string = 'GQSM-X'
  public color: string;

  constructor(color:string){
    this.color = color;
  }

  public getDescription(): string{
    return `型號是: ${this.model} (${this.color})`
  }
}

const redCar = new Car('red')
const blueCar = new Car('blue')

console.log(redCar.getDescription())
console.log(blueCar.getDescription())


class CarII extends Car {
  public getModel():string {
    return this.model;
  }

  public getDescription(): string{
    return `${super.getDescription()} (II)`
  }
}

const redCarII = new CarII('red');
console.log(redCarII.getDescription());
console.log(redCarII.getModel())