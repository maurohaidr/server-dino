const { Dino } = require('../db');
const { Op } = require("sequelize");

const dinos = async function(req, res) {
    const ret = [];
    if(req.query.nombre){
        const nombre = req.query.nombre;
        Dino.findAll({ where: { nombre:{ [Op.iLike]: `%${nombre}%`  } } }).then(resultado => {
            resultado.forEach(f => {
                ret.push({
                    id: f.id,
                    nombre: f.nombre,
                    altura: f.altura,
                    largo: f.largo,
                    dieta: f.dieta,
                    imagen: f.imagen,
                    peligro: f.peligro,
                    patas: f.patas,
                    peso: f.peso
                })
            })
            return res.json(ret)        
        })
        .catch(error => res.send(error, 'Algo salio mal'))
    }
    else{
    Dino.findAll({}).then(resultado => {
        resultado.forEach(f => {
            ret.push({
                id: f.id,
                nombre: f.nombre,
                altura: f.altura,
                largo: f.largo,
                dieta: f.dieta,
                imagen: f.imagen,
                peligro: f.peligro,
                patas: f.patas,
                peso: f.peso
            })
        })
        return res.json(ret)        
    })
    .catch(error => res.send(error, 'Algo salio mal'))
    }
}
module.exports = dinos