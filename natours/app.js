import express from 'express';
import morgan from 'morgan';
import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// app.get("/hello", (req, res) => {
//     // res.status(200).send("Hello");
//     res.status(200).json({
//         msg: "hello from server",
//         status: 200,
//     });
// });

// app.post("/hello", (req, res) => {
//     res.status(201).json({
//         msg: "something created",
//         status: 201,
//     });
// });

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTourById);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;
