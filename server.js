var five = require("johnny-five"),
    board = new five.Board();

console.log('booting');
board.on("ready", function() {

  console.log('Booted, strobing');
  // Create an Led on pin 7 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  (new five.Led(7)).strobe();

});