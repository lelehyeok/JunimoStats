import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Servidor JunimoStats funcionando correctamente',
    dbEstado: mongoose.connection.readyState === 1 ? 'Conectado' : 'Desconectado',
  });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'junimostats'
    });
    console.log('Conexión a la base de datos establecida correctamente');

    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`Servidor JunimoStats escuchando en el puerto ${PORT}`);
      });
    }
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
}

startServer();

export default app;