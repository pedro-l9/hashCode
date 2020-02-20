const sortBooksByScore = bookScores => books => {
  return books.sort(
    (a, b) => bookScores[parseInt(b)] - bookScores[parseInt(a)]
  );
};

function sortLibs(libs) {
  return libs.sort((a, b) => {
    const signupOrder = a.signup - b.signup;

    if (signupOrder === 0) return b.scoreSum * b.cap - a.scoreSum * a.cap;
    else return signupOrder;
  });
}

exports.sortBooksByScore = sortBooksByScore;
exports.sortLibs = sortLibs;
