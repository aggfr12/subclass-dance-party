var ShakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("shaky");
  // this.$node.css("border-color", "blue");
};

ShakyDancer.prototype = Object.create(Dancer.prototype);

ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  this.$node.animate({
    bottom: "-=10",
    width: "10%",
  });
};


ShakyDancer.prototype.lineUp = function() {
  this.setPosition(4,0);
};
