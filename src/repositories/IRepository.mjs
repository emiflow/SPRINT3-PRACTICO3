class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");
    }

    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    obtenerMayoresDe30() {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }
    crearSuperheroe(superheroe){
        throw new Error("Método 'crearSuperheroe()' no implementado");
    }
    actualizarSuperheroe(id,datosActualizados){
        throw new Error("Método 'actualizarSuperheroe()' no implementado");
    }
    borrarPorIdSuperheroe(id){
        throw new Error("Método 'borrarPorIdSuperheroe()' no implementado");
    }
    borrarPorNombreSuperheroe(nombre){
        throw new Error("Método 'borrarPorNombreSuperheroe()' no implementado");
    }
    borrarTodo(){
        throw new Error("Método 'borrarTodo()' no implementado");
    }
    
    
}

export default IRepository;
