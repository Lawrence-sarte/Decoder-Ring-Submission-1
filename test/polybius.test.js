// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("Polybius Tests", () => {
    describe ("Encoding", () =>{
        it("should encode a message by translating each letter to number pairs", () => {
            const message = "message";
            const actual = polybius(message);
            const expected = "23513434112251";
      
            expect(actual).to.equal(expected);
          });
        it ("Should translate letters i and j to 42", () =>{
            const message = "jiggle";
            const actual = polybius(message);
            const expected = "424222221351";

            expect(actual).to.equal(expected);
        });

        it ("Should ignore capitol letters ", ()=>{
            const message = "My Message";
            const actual = polybius(message);
            const expected = "2345 23513434112251";

            expect(actual).to.equal(expected);
        });
        
        it("Should maintain spaces in the message", ()=>{
            const message = "my message";
            const actual = polybius(message);
            const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
        });
    })
    describe("Decoding", ()=>{
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";
      
            expect(actual).to.equal(expected);
          });
        it ("Shoould translate number 42 to i/j", () =>{
            const message = "424222221351";
            const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
        });
        it("Should maintain spaces in the message", () =>{
            const message = "2345 23513434112251";
            const actual = polybius(message, false);
            const expected = "my message";

      expect(actual).to.equal(expected);
        });

    })
})