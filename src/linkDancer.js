var LinkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("link");
};

LinkDancer.prototype = Object.create(Dancer.prototype);

LinkDancer.prototype.constructor = LinkDancer;

LinkDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
  this.$node.animate({
    right: "+=40",
    top: "+=10"
  });
};


LinkDancer.prototype.lineUp = function() {
  this.setPosition(8,0);
};
