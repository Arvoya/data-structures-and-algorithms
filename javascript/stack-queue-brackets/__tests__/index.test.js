const { validateBrackets } = require("../index");

describe("validateBrackets", () => {
     it("should return true for an empty string", () => {
          expect(validateBrackets("")).toBe(true);
     });

     it("should return true for single type of brackets", () => {
          expect(validateBrackets("()")).toBe(true);
          expect(validateBrackets("[]")).toBe(true);
          expect(validateBrackets("{}")).toBe(true);
     });

     it("should return true for mixed types of brackets", () => {
          expect(validateBrackets("()[]{}")).toBe(true);
          expect(validateBrackets("{[()]}")).toBe(true);
     });

     it("should return true for nested brackets", () => {
          expect(validateBrackets("({[]})")).toBe(true);
          expect(validateBrackets("([{}])")).toBe(true);
     });

     it("should return false for incorrectly balanced brackets", () => {
          expect(validateBrackets("(")).toBe(false);
          expect(validateBrackets(")")).toBe(false);
          expect(validateBrackets("((")).toBe(false);
          expect(validateBrackets("))")).toBe(false);
          expect(validateBrackets("[(])")).toBe(false);
          expect(validateBrackets("{[}]")).toBe(false);
     });

     it("should return false for mismatched brackets", () => {
          expect(validateBrackets("([)]")).toBe(false);
          expect(validateBrackets("{[(])}")).toBe(false);
     });

     it("should return false for extra closing brackets", () => {
          expect(validateBrackets("()()()())")).toBe(false);
          expect(validateBrackets("([]]]")).toBe(false);
     });
});
