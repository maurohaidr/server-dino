const { Dino } = require('../db');

const postDino = function(req, res) {
    let {nombre, altura, largo, dieta, imagen, peligro, patas, peso} = req.body; 
    Dino.create({
        nombre: nombre,
        altura: altura,
        largo: largo,
        dieta: dieta,
        imagen: imagen,
        peligro: peligro,
        patas: patas,
        peso: peso
    })
    .then(() => {return res.send(console.log('Dino Creado'))})
    .catch(err => {return res.status(500).send(console.log(err))})
}

module.exports = postDino