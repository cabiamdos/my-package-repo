const getURLByLocation = require('./../index2.js');
test("Resturns user to located website by country ", () => {
  expect(getURLByLocation("USA")).toBe("/home")
});
