// Write your tests here!
const  {expect}  = require("chai");
const { caesar } = require("../src/caesar");

describe ("ceasar tests" ,()=> {
    describe ("Checking for Inalid Inputs", () =>{
it ("should return false if shift is equal to 0", () =>{
    const message = "zebra magazine";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
})

it ("should return dalse if shift is < -25", () =>{
    const message = "zebra magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
});

it ("should return false if shift is > 25", () =>{
    const message = "zebra magazine";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
});
it("Should return false if shift input is not present", () => {
    const message = "zebra magazine";
    const actual = caesar(message);

    expect(actual).to.be.false;
});

    })
    describe ("encoding a message", ()=> {
it ("should return message poperly encoded/decoded", ()=> {
    const message = "message";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "phvvdjh";

      expect(actual).to.equal(expected);
});
it ("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", ()=>{
    const message = "a message.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh.";

      expect(actual).to.equal(expected);
});
it("should ignore capital letters", () => {
    const message = "A Message";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "d phvvdjh";

    expect(actual).to.equal(expected);
});

    })
})