const sortScore = bookScores => books => {
  return books.sort(
    (a, b) => bookScores[parseInt(b)] - bookScores[parseInt(a)]
  );
};

function sortLibs(libs) {
  return libs.sort((a, b) => b.libScore - a.libScore);
}

exports.sortScore = sortScore;
exports.sortLibs = sortLibs;
