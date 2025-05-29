import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Api is running'); 
});

app.listen(port, () => {
  console.log("server is running on port", port);
});