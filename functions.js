require('dotenv').config()
const axios = require('axios');

const functions = {
  add: (n1, n2) => n1 + n2,
  createUser: (fName, lName) => {
    return {
      firstName: fName,
      lastName: lName,
    };
  },
  reverseString: (str) => {
    console.log(process.env.name);
    console.log("redefined");
    return str.split('').reverse().join('');
  },
  fetchUser: async () => {
    try {
      const user = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      return user.data;
    } catch (error) {
      console.log(error);
    }
  },
};

console.log(functions.reverseString('hello'));

module.exports = functions;
