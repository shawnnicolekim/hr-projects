var HoverDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://p1.hiclipart.com/preview/741/966/542/john-cena-png-clipart-thumbnail.jpg" class="hover"/>');
  this.setPosition(top, left);
};

HoverDancer.prototype = Object.create(Dancer.prototype);
HoverDancer.prototype.constructor = HoverDancer;
//HoverDancer.prototype.step = function() {
// Dancer.prototype.step.call(this);
//};
