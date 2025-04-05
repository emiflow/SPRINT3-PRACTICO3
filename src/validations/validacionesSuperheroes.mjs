import { body } from "express-validator";

export const reglasDeValidacion = () => [
    body('nombreSuperHeroe').notEmpty().withMessage('El nombre del Superheroe es OBLIGATORIO').bail()
    .isLength({min:3,max:60}).withMessage('Ingrese un nombre de Superheroe que tenga 3 o mas y 60 o menos caracteres')
    .trim(),

    body('nombreReal').notEmpty().withMessage('El nombre real del Superheroe es OBLIGATORIO').bail()
    .isLength({min:3,max:60}).withMessage('Ingrese el nombre real del Superheroe que tenga 3 o mas y 60 o menos caracteres')
    .trim(),

    body('edad').notEmpty().withMessage('La edad del Superheroe es OBLIGATORIA').bail()
    .isInt({min:0}).withMessage('La edad tiene que ser un NUMERO,y ser  mayor o igual a 0')
    .trim(),

    body('poderes').notEmpty().withMessage('Los poderes del Superheroe son OBLIGATORIOS').bail()
    .customSanitizer(value => value.split(","))
    .isArray({min:1}).withMessage('Debe ingresar un array de Poderes con un poder como minimo').bail()
    .custom((poderes)=>{
        poderes.forEach(poder => {
            if(poder === ''){
                throw new Error("No se puede tener poderes vacios");
            }
            if (typeof poder !== "string") {
                throw new Error("Cada poder debe ser un texto");
              }
            if((poder.length < 3)||(poder.length > 60)){
                throw new Error("Cada poder debe ser un texto de 3 o mas y 60 o menos caracteres");
            }
        });
        return true;
    }),
    
    body('poderes.*').trim(),

    body('aliados').customSanitizer(value => value.split(",")).trim(),

    body('enemigos').customSanitizer(value => value.split(",")).trim()
    

];


