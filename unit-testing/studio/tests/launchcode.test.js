// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
// Write your unit tests here!
  test("Returns 'nonprofit' as the value of 'organization'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("Returns 'Jeff' as the value of 'executiveDirector'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("Returns '100' as the value of 'percentageCoolEmployees'", function() {
    expect(launchcode.percentageCoolEmployees).toBe(Number("100"));
  });

  test("Returns 'Web Development' as the 1st index of programsOffered", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
  });

  test("Returns 'Data Analysis' as the 2nd index of programsOffered", function() {
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
  });

  test("Returns 'Liftoff' as the 3rd index of programsOffered", function() {
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
  });

  test("Returns 3 as the length of the array for programsOffered", function() {
    expect(launchcode.programsOffered.length).toBe(Number(3));
  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function() {
    let output = launchcode.launchOutput(2)
    expect(output).toBe("Launch!")
  });

  test("When passed a number that is ONLY divisible by 3, return 'Code!'", function() {
    let output = launchcode.launchOutput(3)
    expect(output).toBe("Code!")
  });

  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", function() {
    let output = launchcode.launchOutput(5)
    expect(output).toBe("Rocks!")
  });

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function() {
    let output = launchcode.launchOutput(30)
    expect(output).toBe("LaunchCode Rocks!")
  });
  
});