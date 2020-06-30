import five from "johnny-five";

class Port11Controller {
  async index(req, res) {
    var board = new five.Board();

    board.on("ready", function() {
      var led = new five.Led(11);
      led.blink(500);
    });

    return res.json(board);
  }
}

export default new Port11Controller();
