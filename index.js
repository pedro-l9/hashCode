const { sortScore, sortLibs, removeDuplicates } = require("./util.js");
const { getData, buildOutput } = require("./parser.js");

const INPUT_FILE = process.argv[2];

try {
  let { libs, bookScores } = getData(INPUT_FILE);
  const sortBooks = sortScore(bookScores);

  libs = sortLibs(libs);
  libs = libs.map(lib => ({ books: sortBooks(lib.books), ...lib }));
  libs = removeDuplicates(libs);
  buildOutput(libs);
} catch (err) {
  console.error(err);
}
