import express from 'express';

import {
  getAllTours,
  getTourById,
  createTour,
  deleteTour,
  updateTour,
} from '../controller/tourController.js';


const tourRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

export default tourRouter;
