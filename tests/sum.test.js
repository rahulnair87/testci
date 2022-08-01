const sum = require("../functions/sum");
const path = require("path");
const fs = require("fs");

test("adds 1 + 2 to equal 3", () => {

  const filePath = path.join(__dirname, '..', 'YoroiBuilds/Yoroi Nightly/manifest.json');
  const str = fs.readFileSync(filePath);
  console.log(str);
  expect(sum(1, 2)).toBe(3);
});

