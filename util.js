const sortScore = bookScores => books => {
  return books.sort(
    (a, b) => bookScores[parseInt(b)] - bookScores[parseInt(a)]
  );
};

function sortLibs(libs) {
  return libs.sort((a, b) => b.libScore - a.libScore);
}

function removeDuplicates(libs) {
  let livros = {};

  return libs.map(lib => {
    const newBooks = lib.books.filter(bookId => {
      if (livros[bookId] !== undefined) return false;
      else {
        livros = { [bookId]: true, ...livros };
        return true;
      }
    });

    return { books: newBooks, ...lib };
  });
}

exports.sortScore = sortScore;
exports.sortLibs = sortLibs;
exports.removeDuplicates = removeDuplicates;
