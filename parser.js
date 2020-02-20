const fs = require("fs");

function getData(fileName) {
  const lines = fs
    .readFileSync(fileName, "utf8")
    .toString()
    .split(String.fromCharCode(10));

  const [bookCount, libCount, dayCount] = lines[0].split(" ");

  const bookScores = lines[1].split(" ");

  const libs = [];
  for (i = 2; lines[i].length > 0; i += 2) {
    const [bookCnt, signup, cap] = lines[i].split(" ");
    const books = lines[i + 1].split(" ");

    const scoreSum = books.reduce((acc, bookId) => (acc += bookScores[bookId]));
    const libScore = (scoreSum * cap) / signup;

    libs.push({
      bookCnt,
      signup,
      cap,
      books,
      libScore
    });
  }

  return {
    bookCount,
    libCount,
    dayCount,
    bookScores,
    libs
  };
}

function buildOutput(libs) {
  const lines = [`${libs.length}`];

  fs.writeFile(
    "output.txt",
    lines.join(String.fromCharCode(10)),
    "utf8",
    err => {
      if (err) return console.log(err);
      console.log("Hello World > helloworld.txt");
    }
  );
}

exports.getData = getData;
exports.buildOutput = buildOutput;
