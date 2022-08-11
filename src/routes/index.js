import { Router } from 'express';
import howoldController from "../controller/index.js";

const howoldRoute = Router();

howoldRoute.get('/', howoldController);

export default howoldRoute;
