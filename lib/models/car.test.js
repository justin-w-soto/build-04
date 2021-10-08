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
})

// GET BY ID ROUTE GETS CAR 

// -------------------------------------------------------------------------------->>>

// GET ALL CARS FROM THE TABLE

// -------------------------------------------------------------------------------->>>

// UPDATE A CAR BY ID WITH A PUT ROUTE

// -------------------------------------------------------------------------------->>>

// DELETE CAR BY ID







  afterAll(() => {
    return pool.end();
  });

