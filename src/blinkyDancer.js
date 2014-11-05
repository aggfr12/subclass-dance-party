var BlinkyDancer = function(top, left, timeBetweenSteps){
  // when BlinkyDancer instantiated the arguments given are applied to the Dancer properties and methods
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css("border-color", "blue");
};

// set blinkydancer prototype to a new empty object which points to dancer prototype
// set blinkdance prototype constructor to itself
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  
  Dancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function(){
  this.setPosition(2,0);
}

  