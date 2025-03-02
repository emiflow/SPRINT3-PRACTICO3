import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: { type: String },
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: { type: String }
});

const superHero = mongoose.model('Grupo-03', superheroSchema, 'Grupo-03');

export default superHero;
