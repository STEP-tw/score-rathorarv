let Score = function(number=0){
    this.score = number;
}

Score.prototype.getScore = function(){
  return this.score;
}

Score.prototype.updateScore = function(points){
  this.score += points;
  return this.score;
}
