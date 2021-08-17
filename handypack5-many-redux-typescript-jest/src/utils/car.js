//const uuid = require('uuid')
import { v4 as uuidv4 } from 'uuid'

const car = {
  
  carContent: [],

  getCurrentCar: () => car.carContent,

  addProdToCar: (name, count) => {
    const workCar = [...car.getCurrentCar()];
    workCar.push({ id: uuidv4(), name, count });
    return workCar;
  }
}


//console.log(car.addProdToCar("acar",1))

export default car;