import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController'
import DeliverymanControlller from './app/controllers/DeliverymanController'
import FileController from './app/controllers/FileController'
import PackageController from './app/controllers/PackageController'
import DeliveryControlller from './app/controllers/DeliveryController'
import DeliveryProblemsControlller from './app/controllers/DeliveryProblemsControlller'


import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliverymans/:deliverymanID/deliveries',DeliveryControlller.index);
routes.post('/deliverymans/:deliverymanID/deliveries/:id',DeliveryControlller.store);
routes.put('/deliverymans/:deliverymanID/deliveries/:id',DeliveryControlller.update);

routes.post('/delivery/:deliveryID/problems',DeliveryProblemsControlller.store);
routes.use(authMiddleware);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients/:id', RecipientController.find);
routes.delete('/recipients/:id', RecipientController.delete);

routes.get('/deliverymans',DeliverymanControlller.index);
routes.post('/deliverymans',DeliverymanControlller.store);
routes.put('/deliverymans/:id', DeliverymanControlller.update);
routes.get('/deliverymans/:id', DeliverymanControlller.find);
routes.delete('/deliverymans/:id', DeliverymanControlller.delete);

routes.post('/files', upload.single('file'), FileController.store);


routes.get('/packages',PackageController.index);
routes.post('/packages', PackageController.store);
routes.put('/packages/:id', PackageController.update);
routes.get('/packages/:id', PackageController.find);
routes.delete('/packages/:id', PackageController.delete);


export default routes;
