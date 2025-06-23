
const express = require('express');
const app = express();
app.use(express.json());

let cars = [
  { id: 1, model: 'Toyota Camry', owner: 'Айбек' },
  { id: 2, model: 'Hyundai Sonata', owner: 'Аружан' },
  { id: 3, model: 'Kia Sportage', owner: 'Нұржан' }
];

let nextId = 4;


app.get('/cars', (req, res) => {
  const { model, owner, sort } = req.query;
  let result = [...cars];Ы

  
  if (model) {
    result = result.filter(car =>
      car.model.toLowerCase().includes(model.toLowerCase())
    );

  if (owner) {
    result = result.filter(car =>
      car.owner.toLowerCase().includes(owner.toLowerCase())
    );
  }

  
  if (sort === 'asc' || sort === 'desc') {
    result.sort((a, b) => {
      const modelA = a.model.toLowerCase();
      const modelB = b.model.toLowerCase();
      if (sort === 'asc') return modelA.localeCompare(modelB);
      else return modelB.localeCompare(modelA);
    });
  }

  res.json(result);
}});


app.get('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find(c => c.id === id);
  if (!car) {
    return res.status(404).json({ message: 'Машина табылмады' });
  }
  res.json(car);
});


app.post('/cars', (req, res) => {
  const { model, owner } = req.body;

  if (!model || !owner) {
    return res.status(400).json({ message: 'model және owner қажет' });
  }

  const newCar = {
    id: nextId++,
    model,
    owner
  };
  cars.push(newCar);
  res.status(201).json(newCar);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
