import path from 'path';
import fs from 'fs';
const __dirname = path.resolve();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.js`));

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: tours.length,
    data: {
      tours,
    },
  });
};

const getTourById = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((d) => d.id === id);
  if (tour) {
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } else res.status(404).send('not found');
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  let newTour = req.body;
  newTour.id = newId;
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/data/tours-simple.js`,
    JSON.stringify(tours),
    (error) => {
      res.status(201).json({
        status: 201,
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateTour = (req, res) => {
  const tour = tours.find((t) => t.id === +req.params.id);
  if (tour) {
    res.status(200).json({
      status: 'update success',
      data: {
        tour,
      },
    });
  } else {
    res.status(404).send('not found');
  }
};

const deleteTour = (req, res) => {
  const tour = tours.find((t) => t.id === +req.params.id);
  if (tour) {
    res.status(204).json({
      status: 'delete success',
      data: null,
    });
  } else {
    res.status(404).send('not found');
  }
};

export  { getAllTours, createTour, updateTour, deleteTour, getTourById };
