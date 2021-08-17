
//import { expect, jest } from '@jest/globals'
import { v4 as uuidv4 } from 'uuid'
//import { describe } from 'yargs'
import car from '../src/utils/car'

jest.mock('uuid')

const getCurrentCarSpy = jest.spyOn(
  car,'getCurrentCar',
)    


describe('addProdToCar', () => {  
  beforeAll(() => {
    uuidv4.mockReturnValue('9999')   //因為uuid被mock調
  })   
  /*                              //所以需要這行去傳直
  test('cehck_execute_uuid', () =>{
    const newCar = car.addProdToCar('apple',3);
    //expect(uuidv4.mock.calls.length).toBe(1);
    console.log(newCar)
  })
  */
  test('check_add_prod', () => {
    const newCar = car.addProdToCar('apple',3)
    expect(uuidv4).toHaveBeenCalled()
    expect(getCurrentCarSpy).toHaveBeenCalled()
    expect(newCar).toEqual(
      [{ id: '9999', name: 'apple', count:3 }],
    );
  });
})
