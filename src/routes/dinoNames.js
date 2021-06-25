const { Dino } = require('../db');


const dinoNames = function(req, res) {
  const names = [];
  Dino.findAll({attributes: ["nombre"]}).then(resultado =>{
  resultado.forEach(e => {
      names.push(e.nombre)
  })
  return res.json(names)  
  })
  .catch(error => res.status(500).json(error))
}
module.exports = dinoNames