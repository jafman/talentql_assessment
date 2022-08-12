import { Router } from 'express';
import howoldController from "../controller/index.js";
import { dobValidator } from "../middleware/index.js";

const howoldRoute = Router();

howoldRoute.get('/', dobValidator, howoldController);

export default howoldRoute;
