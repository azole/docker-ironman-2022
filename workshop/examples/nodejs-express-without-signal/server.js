const app = require('express')();
const cors = require('cors');
const os = require('os');

app.use(cors());

app.get('/', (req, res) => {
  console.log('GET /');
  res.json({
    message: `Hello Docker from ${os.hostname()}`,
  });
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res) => {
  console.error(err.message);
  res.sendStatus(500);
});

const server = app.listen(3000, () => {
  console.log('Server is running...');
});
