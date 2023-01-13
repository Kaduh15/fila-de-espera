import { Router } from 'express';
import WaitingLineController from '../Controllers/WaitingLineController';
import addCustomerSchema from '../schemas/addCustomerSchema';
import bodyValidate from './../middlewares/bodyValidationMiddleware'

const waitingLineRouter = Router();
const waitingLineController = new WaitingLineController();

waitingLineRouter
  .post('/', bodyValidate(addCustomerSchema),async (req, res) => await waitingLineController.create(req, res))

export default waitingLineRouter;