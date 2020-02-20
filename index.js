const { getData } = require("./parser.js");
const { sortScore } = require("./util.js");

try {
  const data = getData("a_example.txt");

  data.libs = data.libs.sort((a, b) => b.libScore - a.libScore);

  console.log(data);
  console.log(data.libs[1].books);
  const booksSorted = sortScore(data.bookScores, data.libs[1].books);
  console.log(booksSorted);
} catch (err) {
  console.error(err);
}
