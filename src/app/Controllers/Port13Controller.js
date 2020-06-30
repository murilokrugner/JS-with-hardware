import five from "johnny-five";

class Port13Controller {
  async index(req, res) {
    var board = new five.Board();

    //const value = req.query;

    //const format = parseStr(value);

    //console.log(format);

    board.on("ready", function() {
      var led = new five.Led(1);
      led.blink(500);
    });

    return res.json(board);
  }
}

export default new Port13Controller();
