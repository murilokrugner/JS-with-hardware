import { Router } from "express";

import Port13Controller from "../src/app/Controllers/Port13Controller";
import Port12Controller from "../src/app/Controllers/Port12Controller";
import Port11Controller from "../src/app/Controllers/Port11Controller";

const routes = new Router();

routes.get("/port13", Port13Controller.index);
routes.get("/port12", Port12Controller.index);
routes.get("/port11", Port11Controller.index);

export default routes;
