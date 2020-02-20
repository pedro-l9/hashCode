function sortScore(bookScores, books){
    return books.sort((a, b) => {
        if(bookScores[a] > bookScores[b]) return 1;
        if(bookScores[a] < bookScores[b]) return 1;
        return 0;
    });
}

exports.sortScore = sortScore;