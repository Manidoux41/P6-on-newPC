import express from 'express';
import './config/db.js';

const app = express();

const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`Listening on port: ${port}`));