import { Router } from "express";

import ArduinoController from "./app/Controllers/ArduinoController";

const routes = new Router();

routes.get("/arduino", ArduinoController.index);

export default routes;
