import { euler } from './../src/euler.js'

test('should return 0 if argument <= 3', () => {
  expect(euler(3)).toEqual(0);
})