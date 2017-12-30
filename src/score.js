let Score = function(){
    this.score = 0;
}

Score.prototype.getScore = function(){
  return this.score;
}

Score.prototype.updateScore = function(points){
  this.score += points;
  return this.score;
}
