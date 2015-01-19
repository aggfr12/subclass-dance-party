var MarioDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("mario");
};

MarioDancer.prototype = Object.create(Dancer.prototype);

MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.animate({
    left: "+=40",
    bottom: "+=10"
  });
};


MarioDancer.prototype.lineUp = function() {
  this.setPosition(6,0);
};
