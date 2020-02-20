const { sortScore } = require("./util.js");
const { getData, buildOutput } = require("./parser.js");

const INPUT_FILE = process.argv[2];

try {
  const data = getData(INPUT_FILE);

  data.libs = data.libs.sort((a, b) => b.libScore - a.libScore);

  console.log(data);
  console.log(data.libs[1].books);
  const booksSorted = sortScore(data.bookScores, data.libs[1].books);
  console.log(booksSorted);
  buildOutput(data.libs);
} catch (err) {
  console.error(err);
}
