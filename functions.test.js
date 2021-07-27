const functions = require('./functions');

// toBe() for primitive values
// toBeFalsy() -> 0,null,undefined
// toBeEqual() -> for objects/arrays

// toBe()
test('to be equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toEqual()
test('should be equal to object', () => {
  let fName = 'karthik';
  let lName = 'r';
  expect(functions.createUser(fName, lName)).toEqual({
    firstName: fName,
    lastName: lName,
  });
});

// Regex
test('no n in mumbai', () => {
  expect('numbai').not.toMatch(/N/);
});

// Arrays
test('check array value', () => {
  const a = ['hello', 'again'];
  expect(a).toContain('hello');
});

// Async code

test('name to be Leanne Graham', async () => {
  const user = await functions.fetchUser();
  expect(user.name).toEqual('Leanne Graham');
});
