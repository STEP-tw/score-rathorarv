let Score = function(){
    this.score = undefined;
}

Score.prototype.getScore = function(){
    this.score = getScore();
}

Score.prototype.updateScoreBoard = function(points){
    let newScore = this.score + points;
    updateScore(newScore);
}

Score.prototype.startingScore = function(){
    updateScore(0);
}