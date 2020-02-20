function sortScore(bookScores, books){
    return books.sort((a, b) => {
        if(bookScores[parseInt(a)] > bookScores[parseInt(b)]) return -1;
        if(bookScores[parseInt(a)] < bookScores[parseInt(b)]) return 1;
        return 0;
    });
}

exports.sortScore = sortScore;