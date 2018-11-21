// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const adder = require('../fizzBuzzer');

// // unit tests for our `fizzBuzzer` function
// describe('fizzBuzzer', function() {
  // // test the normal case
  // it('input must be a numbers', function() {
  //   // range of normal inputs, including
  //   // notable cases like negative answers
  //   const normalCases = [
  //     {a: 2, b: 3, expected: 5},
  //     {a: 200, b: 2000, expected: 2200},
  //     {a: 2, b: -5, expected: -3}
  //   ];
  //   // for each set of inputs (a, b), `adder` should
  //   // produce the expected value
  //   normalCases.forEach(function(input) {
  //     const answer = adder(input.a, input.b);
  //     expect(answer).to.equal(input.expected);
  //   });
  // });

  it('should raise error if args not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
