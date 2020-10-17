var GhostDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-cute-ghost-ghostly-cute-ghost-halloween-halloween-ghost-png-image_3933462.jpg" class="ghost"/>');
  this.setPosition(top, left);
  this.step();
};

GhostDancer.prototype = Object.create(Dancer.prototype);
GhostDancer.prototype.constructor = GhostDancer;
GhostDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle('bounce');
};




