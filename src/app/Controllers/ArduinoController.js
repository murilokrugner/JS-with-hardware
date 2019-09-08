import five from "johnny-five";

class ArduinoController {
  async index(req, res) {
    var board = new five.Board();

    board.on("ready", function() {
      led.blink(500);
    });

    return res.json(board);
  }
}

export default new ArduinoController();
