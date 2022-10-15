const { Board, Led } = require("johnny-five");
const board = new Board();

const arduino = () => {
  board.on("ready", () => {
    const led = new Led(13);
    board.repl.inject({
      on: function () {
        led.on();
      },
      off: function () {
        led.off();
      },
      strobe: function () {
        led.strobe();
      },
      blink: function () {
        led.blink();
      },
      stop: function () {
        led.stop();
      },
    });
  });
};

arduino();
