const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for missing or invalid user data
  db.createUser(user, (err, result) => {
    if (err) {
      // Not sending a proper error response to the client
      console.error(err);
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});