const { getData } = require("./parser.js");

try {
  const data = getData("a_example.txt");

  data.libs = data.libs.sort((a, b) => b.libScore - a.libScore);

  console.log(data);
} catch (err) {
  console.error(err);
}
