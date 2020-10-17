// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag

  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};


Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  // have to do something about this line in later steps
  this.position = [top, left];
};


Dancer.prototype.lineUp = function (dancers) {
  let distance = 100;
  for (let i = 0; i < dancers.length; i++) {
    dancers[i].setPosition(distance * i, 'auto');
  }
};


// what happens if one dancer is closest to another, but that one is closer to another partner?
// create an alreadyPaired array or object that receives the locations(top/left) of the pair

// what if there is an odd number of dancers? just leave the odd one out

// create interact method
Dancer.prototype.interact = function(mainDancers) {
  var dancers = mainDancers.slice();
  var pairs = [];
  // iterate over the dancers array to find out the distance of dancers
  while (dancers.length) {
    var i = 0;
    if (dancers.length === 1) {
      break;
    }
    var distance = 1000;
    var index;
    var closestDancer = 0;
    for (var j = 0; j < dancers.length; j++) {
      if (i === j) {
        continue;
      }
      var topDiff = dancers[i].position[0] - dancers[j].position[0];
      var leftDiff = dancers[i].position[1] - dancers[j].position[1];
      if (Math.sqrt(topDiff * topDiff + leftDiff * leftDiff) < distance) {
        distance = Math.sqrt(topDiff * topDiff + leftDiff * leftDiff);
        closestDancer = dancers[j];
        index = j;
      }
    }
    pairs.push(dancers[i], closestDancer);
    dancers.splice(index, 1);
    dancers.splice(i, 1);
  }

  window.dancers = pairs;

  var topDistance = 200;
  var leftDistance = 300;
  var count = 1;
  var num = 1;
  for (var m = 0; m < window.dancers.length; m += 2) {
    window.dancers[m].setPosition(topDistance * count, leftDistance * num);
    window.dancers[m + 1].setPosition(topDistance * count + 50, leftDistance * num + 50);
    count++;
    num++;
    if (num > 4) {
      num = 0;
    }
    if (count > 2) {
      count = 0;
    }
  }
};


