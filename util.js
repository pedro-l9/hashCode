function sortScore(bookScores, books){
    return books.sort((a, b) => bookScores[parseInt(b)] - bookScores[parseInt(a)]);
}

function sortLibrary(libs){
    return libs.sort((a, b) => b.libScore - a.libScore);
}

function removeDuplicates(libs){

}

exports.sortScore = sortScore;
exports.sortLibrary = sortLibrary;