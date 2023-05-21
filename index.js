const express = require('express');
const app = express();

const students = [
  { id: 1, name: 'Agus' },
  { id: 2, name: 'Meli' },
  { id: 3, name: 'Milo' }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Node JS API Cara de verga XD');
});

app.get('/api/students', (req, res) => {
  res.send(students);
});

app.get('/api/students/:id', (req, res) => {
  const student = students.find(c => c.id === parseInt(req.params.id));
  if (!student) return res.status(400).send('Estudiante no encontrado');
  res.send(student);
});

app.post('/api/students', (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    age: parseInt(req.body.age),
    enroll: req.body.enroll === 'true'
  };

  students.push(student);
  res.send(student);
});

app.delete('/api/students/:id', (req, res) => {
  const student = students.find(c => c.id === parseInt(req.params.id));
  if (!student) return res.status(400).send('Estudiante no encontrado');

  const index = students.indexOf(student);
  students.splice(index, 1);

  res.send(student);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
