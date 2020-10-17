var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://img.favpng.com/15/6/2/football-clip-art-png-favpng-gwG7A5iR6L2azamrZB2Tg3PEj.jpg" class="bounce"/>');
  this.setPosition(top, left);
  this.step();
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({height: '125px', width: '125px'}, 3000);
  this.$node.animate({height: '75px', width: '75px'}, 3000);
};



