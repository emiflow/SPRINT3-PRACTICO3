import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30,crearSuperheroe, actualizarSuperheroe,borrarPorIdSuperheroe,borrarPorNombreSuperheroe } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }
        
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }
        
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller( req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }
        
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });
    }
}

export async function crearSuperheroeController(req, res) {
    try {
        const creandoSuperheroe = await crearSuperheroe(req.body);
        res.status(200).json(renderizarSuperheroe(creandoSuperheroe));
    } catch (error) {
        res.status(500).send({mensaje:'Error al crear un superheroe nuevo'});
    }
}

export async function actualizarSuperheroeController(req, res) {
    try {
    const {id}= req.params;
    const datosActualizados = req.body;
    const resultado = await actualizarSuperheroe(id,datosActualizados);
    res.status(200).json(renderizarSuperheroe(resultado));
    } catch (error) {
        res.status(500).send({mensaje:'Superheroe con ID incorrecto o inexistente'}); 
    }
    
}
export async function borrarPorIdController(req, res) {
    try{
        const {id}= req.params;
        const resultado = await borrarPorIdSuperheroe(id);
        if(resultado===null){
            res.status(500).send({mensaje:'Ya ha sido borrado el superheroe con ese ID'}); 
        }
        else{
            res.status(500).send(resultado);
        }
    }
    catch(error){
        res.status(500).send({mensaje:'No existe superheroe con ese ID para borrar'}); 
    }
}

export async function borrarPorNombreSuperheroeController(req, res) {
        const {nombre}= req.params;
        const resultado = await borrarPorNombreSuperheroe(nombre);
        if(resultado===null){
            res.status(500).send({mensaje:'El superheroe con ese NOMBRE ya ha sido borrado O no existe superheroe con ese NOMBRE'}); 
        }
        else{
            res.status(500).send(resultado);
        }
}



