/*
import { add, sub } from '../src/utils/math'

describe('Check sub', () => {
  test('Check the result of 5 - 2', () => {
    expect(sub(5, 2)).not.toBe(1)
  });

  test('Check the result of 5 - 3', () => {
    expect(sub(5, 3)).toBe(2);
  });
});
*/




describe('Check add', () =>{
  beforeEach(()=>{
    console.log('每次執行前執行')
  })
  afterAll(()=>{
    console.log('所有測試結束才看的見我')
  })
  test('Check the result of 5+2', ()=>{
    expect(5 + 2).not.toBe(8)
  })
  test('Check the result of 5 + 3', () =>{
    expect(5 + 3).toBe(8)
  })
})





/*
test('Check the result of 5+ ', () => {
  expect(5 + 2).not.toBe(10);
});

describe('Check add', () => {
  test('Check the result of 5+2', () => {
    expect(5 + 2).not.toBe(8)
  });

  test('Check the result of 5+3', () => {
    expect(5 + 3).toBe(8);
  });
});

describe('Check sub', () => {
  test('Check the result of 5 - 2', () => {
    expect(5 - 2).not.toBe(1)
  });

  test('Check the result of 5 - 3', () => {
    expect(5 - 3).toBe(2);
  });
});
*/