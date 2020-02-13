const express = require('express');
const cache = require('./middlewares/cacheMidleware');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

app.use(cors());

const filterRouter = require('./routes/filter');
app.use('/directions', cache, filterRouter);


app.listen(5000, () => {
  console.log(`App listening on port ${PORT}`);
});