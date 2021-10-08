const pool = require('../utils/pool.js');

class Car {
  
    constructor(row) {
        this.id = row.id,
        this.make = row.make,
        this.model = row.model,
        this.year = row.year
    };

    static async insert({ make, model, year }) {
        const { rows } = await pool.query(
          'INSERT INTO cars (make, model, year) VALUES ($1, $2, $3) RETURNING *',
          [make, model, year]
        );
    
        return new Car(rows[0]);
      }

      static async findById(id) {
          const { rows } = await pool.query(
            'SELECT id FROM cars WHERE cars.id=$1',[id]
          )
          return new Car(rows[0])
      }
}

module.exports = Car;
