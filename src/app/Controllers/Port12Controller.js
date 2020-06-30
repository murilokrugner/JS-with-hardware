import five from "johnny-five";

class Port12Controller {
  async index(req, res) {
    var board = new five.Board();

    /*board.wait(() => {
      led.stop().off();
    });*/

    board.on("ready", function() {
      var led = new five.Led(12);
      led.blink(500);
    });

    return res.json(board);
  }
}

export default new Port12Controller();
