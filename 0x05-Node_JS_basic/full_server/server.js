import express from 'express';

const app = express();
const indexRouter = require('./routes/index');

const port = 1245;

app.use('/', indexRouter);
app.listen(port);

export default app;
