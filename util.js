const sortBooksByScore = bookScores => books => {
  return books.sort(
    (a, b) => bookScores[parseInt(b)] - bookScores[parseInt(a)]
  );
};

function sortLibs(libs) {
  return libs.sort((a, b) => b.libScore - a.libScore);
}

exports.sortBooksByScore = sortBooksByScore;
exports.sortLibs = sortLibs;
