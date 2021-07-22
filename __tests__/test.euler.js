import { euler } from './../src/euler.js'

test('should return 0 if argument <= 3', () => {
  expect(euler(3)).toEqual(0);
})

test('should return 3 if argument = 4', () => {
  expect(euler(4)).toEqual(3);
})

test('should return 3 if argument = 5', () => {
  expect(euler(5)).toEqual(3);
})

test('should return (3+5) if argument = 6', () => {
  expect(euler(6)).toEqual(8);
})

test('should return 23 if argument = 10', () => {
  expect(euler(10)).toEqual(23);
})

test('should return 233168 if argument = 1000', () => {
  expect(euler(1000)).toEqual(233168);
})