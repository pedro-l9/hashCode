const { sortBooksByScore, sortLibs } = require("./util.js");
const { getData, buildOutput } = require("./parser.js");

const INPUT_FILE = process.argv[2];

try {
  let { libs, bookScores } = getData(INPUT_FILE);
  const sortBooks = sortBooksByScore(bookScores);

  libs = sortLibs(libs);
  libs = libs.map(lib => ({
    books: sortBooks(lib.books),
    ...lib
  }));

  buildOutput(libs);
} catch (err) {
  console.error(err);
}
