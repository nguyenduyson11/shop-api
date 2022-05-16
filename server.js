const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());

app.get('api/users', (req, res) => {
  res.status(200).json({
    status: true,
    data: [
      {
        id: 1,
        name: 'son',
      },
      {
        id: 2,
        name: 'tung',
      },
      {
        id: 3,
        name: 'canh',
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server listing port: ${port}`);
});
