// var five = context.global.jfive;    // create a shorter alias
// var led = new five.Led(13);         // instatiate the led
// led.blink(500);                     // blink it every 500 ms
// var five = require("johnny-five"),
//     board = new five.Board();

// board.on("ready", function() {
//   // Create an Led on pin 13
//   var led = new five.Led(13);

//   // Strobe the pin on/off, defaults to 100ms phases
//   led.strobe();
// });

const { Board } = require("johnny-five");

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
const board = new Board({
  port: "/dev/cu.usbmodem1411"
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", () => {
  board.pinMode(13, board.MODES.OUTPUT);

  board.loop(500, () => {
    // Whatever the last value was, write the opposite
    board.digitalWrite(13, board.pins[13].value ? 0 : 1);
  });
});