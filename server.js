import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cropRoutes from './routes/cropRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let cachedConnection = null;

async function connectDB() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }
  cachedConnection = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'junimostats',
    serverSelectionTimeoutMS: 5000,
  });
  return cachedConnection;
}

app.use('/api', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    res.status(500).json({
      ok: false,
      message: 'Error de conexión con MongoDB Atlas',
      error: error.message,
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Servidor JunimoStats funcionando correctamente',
    dbEstado: mongoose.connection.readyState === 1 ? 'Conectado' : 'Desconectado',
  });
});

app.use('/api/crops', cropRoutes);

if (process.env.NODE_ENV !== 'production') {
  connectDB()
    .then(() => {
      console.log('Conexión a la base de datos establecida correctamente');
      app.listen(PORT, () => {
        console.log(`Servidor JunimoStats escuchando en el puerto ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error);
    });
}

export default app;