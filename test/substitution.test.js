// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Subsitution Test", () =>{
    describe ("error handling", () =>{
        it("Should return false if alphabet parameter is greater or less than 26 characters", ()=> {
            const message = "message";
            const alphabet = "short";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
        it("Should return false if alphabet parameter is not present", () =>{
            const message = "message";
            const actual = substitution(message);
            expect(actual).to.be.false;
        });
        it("should return false if the alphabet given has repeating characters", () => {
            const message = "message";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    })
    describe("Encoding and Decoding Messages", ()=>{
        it("Should correctly Encode a messgae", ()=>{
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });
        it ("Should correctly Decode a message", ()=>{
            const message = "ykrrpik";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet, false);
            const expected = "message";

      expect(actual).to.equal(expected);
        });
        it("Should maintain spaces before and after encoding/decoding", () =>{
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
        });
        it("Should ignore capitol letters", ()=>{
            const message = "My Message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";

            expect(actual).to.equal(expected);
        })
    })

})