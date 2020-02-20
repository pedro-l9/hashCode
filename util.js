function sortScore(bookScores, books){
    return books.sort((a, b) => {
        if(bookScores[parseInt(a)] > bookScores[parseInt(b)]) return -1;
        if(bookScores[parseInt(a)] < bookScores[parseInt(b)]) return 1;
        return 0;
    });
}

function sortLibrary(libs){
    return libs.sort((a, b) => {
        if(a.libScore > b.libScore) return -1;
        if(a.libScore < b.libScore) return 1;
        return 0;
    });
}

exports.sortScore = sortScore;
exports.sortLibrary = sortLibrary;