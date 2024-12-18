const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create user' });
    } else {
      res.status(201).json({ message: 'User created successfully', id: result.insertId });
    }
  });
});