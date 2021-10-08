const fs = require('fs');
const { request } = require('https');
const pool = require('../utils/pool');
const Car = require('./car');


// -------------------------------------------------------------------------------->>>

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

// -------------------------------------------------------------------------------->>>

// POST ROUTE INSERTS CAR TO SQL TABLE

it('should POST a car to the sql table', async () => {
  const aCar = await Car.insert({
    id: expect.any(String),
    make: 'Toyota', 
    model: 'blue',
    year: 1920
  })

  expect(aCar).toEqual({
    id: expect.any(String),
    make: 'Toyota', 
    model: 'blue',
    year: 1920
  })
})

// GET BY ID ROUTE GETS CAR 

it ('should GET a car from the table by its ID', async () => {
  const aCar = await Car.insert({
    make: 'Toyota', 
    model: 'blue',
    year: 1920
  });

  const car = await Car.findById('1');


  expect(aCar).toEqual({
    id: expect.any(String),
    make: 'Toyota', 
    model: 'blue',
    year: 1920
  })
})

// -------------------------------------------------------------------------------->>>

// GET ALL CARS FROM THE TABLE

it('GETS all cars from the table', async () => {
  await Car.insert({
    make: 'Toyota', 
    model: 'blue',
    year: 1920
  },
  {
    make: 'Toyota', 
    model: 'red',
    year: 1920
  }
);
  const allCars = await Car.getAllCars();

  expect(allCars).toEqual(
    {
      id: '1',
      make: 'Toyota', 
      model: 'blue',
      year: 1920
    },
    {
      id: '2',
      make: 'Toyota', 
      model: 'red',
      year: 1920
    }
  )

})

// -------------------------------------------------------------------------------->>>

// UPDATE A CAR BY ID WITH A PUT ROUTE



// -------------------------------------------------------------------------------->>>

// DELETE CAR BY ID







})
afterAll(() => {
    return pool.end();
  });

