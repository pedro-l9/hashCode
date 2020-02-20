const fs = require("fs");

const INPUT_FILE = process.argv[2];
const FILE_NAME = INPUT_FILE.substring(INPUT_FILE.lastIndexOf("\\") + 1);

function getData(fileName) {
  const lines = fs
    .readFileSync(fileName, "utf8")
    .toString()
    .split(String.fromCharCode(10));

  const [_, __, dayCount] = lines[0].split(" ");

  const bookScores = lines[1].split(" ").map(BigInt);

  const libs = [];
  for (i = 2; lines[i].length > 0; i += 2) {
    const [___, signup, cap] = lines[i].split(" ").map(BigInt);
    const books = lines[i + 1].split(" ");

    const scoreSum = books.reduce(
      (acc, bookId) => (acc += bookScores[bookId]),
      BigInt(0)
    );
    const libScore = (scoreSum * cap) / signup;

    libs.push({
      signup,
      cap,
      books,
      libScore,
      libId: i / 2 - 1
    });
  }

  return {
    dayCount,
    bookScores,
    libs
  };
}

function buildOutput(libs) {
  const lines = [`${libs.length}`];

  for (lib of libs) {
    lines.push(`${lib.libId} ${lib.books.length}`);
    lines.push(lib.books.join(" "));
  }

  fs.writeFile(
    `./outputs/output-${FILE_NAME}`,
    lines.join(String.fromCharCode(10)),
    "utf8",
    err => {
      if (err) return console.log(err);
    }
  );
}

exports.getData = getData;
exports.buildOutput = buildOutput;
