const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let tasks = [
  { id: 1, text: 'Task 1', done: false },
  { id: 2, text: 'Task 2', done: true },
  { id: 3, text: 'Task 3', done: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
