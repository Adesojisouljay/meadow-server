import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import connectDB from './Db.js';
import cors from "cors";
import registerRoutes from "./routes/registerRoutes.js";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 2100;

app.use(cors());

// Middleware 
app.use(bodyParser.json());

connectDB();

app.use("/api/register-invasion", registerRoutes);

// Routes

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
