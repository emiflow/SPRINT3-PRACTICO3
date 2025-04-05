import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

export async function crearSuperheroe(superheroe) {
    return await superHeroRepository.crearSuperheroe(superheroe);
}

export async function actualizarSuperheroe(id,datosActualizados) {
    return await superHeroRepository.actualizarSuperheroe(id,datosActualizados);
}

export async function borrarPorIdSuperheroe(id) {
    return await superHeroRepository.borrarPorIdSuperheroe(id);
}

export async function borrarPorNombreSuperheroe(nombre) {
    return await superHeroRepository.borrarPorNombreSuperheroe(nombre);
}

export async function borrarTodo() {
    return await superHeroRepository.borrarTodo();
}
