// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // set up step cycle
  this.step();
  // set position to random points
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps){

  //this is set to window in setTimeout, so need to capture this beforehand
  var that = this;
  setTimeout(function(){
    that.step();
  }, this.timeBetweenSteps);
};
 //  setTimeout(this.step.bind(this), this.timeBetweenSteps);  Also works but requires and extra tick

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};