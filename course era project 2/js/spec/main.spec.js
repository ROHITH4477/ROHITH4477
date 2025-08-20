// We need to load the JS file to test it. This is a simple way for browser JS.
// NOTE: This approach has limitations. Module systems (used with Webpack) are better.
// For this project, you may need to set up jasmine.json to include your source file.
// In jasmine.json, set "helpers": ["../js/main.js"]

describe("Loan Calculator Logic", function() {

    it("should calculate the total amount correctly", function() {
        // For $1000 at 5% for 1 year, interest is $50. Total is $1050.
        expect(calculate(1000, 5, 1)).toBe(1050);
    });

    it("should return just the principal when interest rate is 0", function() {
        expect(calculate(5000, 0, 10)).toBe(5000);
    });

});