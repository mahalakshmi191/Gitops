const express = require('express');
const app = express();

const PORT = 3000;

// Simple version indicator (change this to v2 later)
const VERSION = "v2";

app.get('/', (req, res) => {
  res.send(`Hello from MyApp ${VERSION} 🚀`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
