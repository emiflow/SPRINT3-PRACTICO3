import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import bodyParser from 'body-parser';

const app = express();
app.set('view engine' , 'ejs');
const PORT =  3000;
app.use(bodyParser.urlencoded({ extended: true })); // Para formularios URL-encoded
// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/api', superHeroRoutes);


app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
