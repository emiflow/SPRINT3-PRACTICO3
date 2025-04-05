import superHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }

    async obtenerTodos() {
        return await superHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({ [atributo]: valor });
    }

    async obtenerMayoresDe30() {
        return await superHero.find({ 
        edad: {$gt : 30} , 
            planetaOrigen:'Tierra',
            "poderes.1": { $exists: true }
        });

    }

    async crearSuperheroe(superheroe){
        const objetoSuperheroe=superheroe;
            const hero = new superHero({
                nombreSuperHeroe: objetoSuperheroe.nombreSuperHeroe,
                nombreReal: objetoSuperheroe.nombreReal,
                edad: objetoSuperheroe.edad,
                planetaOrigen: objetoSuperheroe.planetaOrigen,
                debilidad: objetoSuperheroe.debilidad,
                poderes: objetoSuperheroe.poderes,
                aliados: objetoSuperheroe.aliados,
                enemigos: objetoSuperheroe.enemigos,
                creador: objetoSuperheroe.creador
            });
        
           const resultado =  await hero.save();
           return resultado;
        
    }

    async actualizarSuperheroe(id,datosActualizados) {
            const {nombreSuperHeroe,nombreReal,edad,planetaOrigen,debilidad,poderes,aliados,enemigos,creador} = datosActualizados;
            const superheroe = await superHero.findOneAndUpdate(

            { _id: id }, 

            { $set: { nombreSuperHeroe:nombreSuperHeroe,nombreReal:nombreReal,edad:edad,planetaOrigen:planetaOrigen,debilidad:debilidad,poderes:poderes,aliados:aliados,enemigos:enemigos,creador:creador} },

            { new: true }

          )

          return superheroe; 
    }

    async borrarPorIdSuperheroe(id) {
            const superheroe = await superHero.findOneAndDelete(
                { _id: id }, 
                { new: true }
              )
        
              return superheroe;   
}
async borrarPorNombreSuperheroe(nombre) {
    const superheroe = await superHero.findOneAndDelete(
        { nombreSuperHeroe: nombre }, 
        { new: true }
      )

      return superheroe;   
}
async borrarTodo() {
    const superheroe = await superHero.deleteMany({});
      return superheroe.deletedCount;   
}

}
export default new SuperHeroRepository();