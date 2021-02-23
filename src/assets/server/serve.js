const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/carros').get((request, response) => {
  response.send(CARROS);
});

app.route('/api/carros').post((request, response) => {
  let carros = request.body;

  const firstId = CARROS ? Math.max.apply(null, CARROS.map(carrosIterator => carrosIterator.id)) + 1 : 1;
  carros.id = firstId;
  CARROS.push(carros);
  

  response.status(201).send(carros);
});

app.route('/api/carros/:id').put((request, response) => {
  const carrosId = +request.params['id'];
  const carros = request.body;

  const index = CARROS.findIndex(carrosIterator => carrosIterator.id === carrosId);
  CARROS[index] = carros;

  response.status(200).send(carros);
});

app.route('/api/carros/:id').get((request, response) => {
  const carrosId = +request.params['id'];

  response.status(200).send(CARROS.find(carrosIterator => carrosIterator.id === carrosId));
});

app.route('/api/carros/:id').delete((request, response)=> {
  const carrosId = +request.params['id'];
  CARROS = CARROS.filter(carrosIterator => carrosIterator.id !== carrosId);
  
  response.status(204).send({});
});

var  CARROS = [
  {id: 1, placa:'QOS0001', modelo: 'Gol',marca: 'Wokswagem', imageUrl : '/assets/images/carros/car1.jpg' },
  {id: 2, placa:'QOS0002', modelo: 'Uno',marca: 'Fiat', imageUrl : '/assets/images/carros/car2.jpg' },
  {id: 3, placa:'QOS0003', modelo: 'Monsa',marca: 'Chevrolet', imageUrl : '/assets/images/carros/car3.jpg' },
  {id: 4, placa:'QOS0004', modelo: 'Chevette',marca: 'Chevrolet', imageUrl : '/assets/images/carros/car4.jpg' },
  {id: 5, placa:'QOS0005', modelo: '208',marca: 'Peugeot', imageUrl : '/assets/images/carros/car5.jpg' },
  {id: 6, placa:'QOS0006', modelo: 'Xsara',marca: 'Citroen', imageUrl : '/assets/images/carros/car5.jpg' },

];
