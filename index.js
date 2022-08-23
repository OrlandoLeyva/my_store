//TODO: add the column amount to wishes.
// TODO: get the total amount of the orders.

const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const { environment } = require('./environment/environment.config');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hi, My server in express');
});

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, soy una nueva ruta');
// });

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(environment.port, () => {
  console.log(`server listen on http://${environment.dbHost}:${environment.port}/api/v1`);
});
