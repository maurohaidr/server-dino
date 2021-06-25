const { Router } = require('express');

const dinos = require('./getDinos')
const postDino = require('./postDino')
const dinoNames = require('./dinoNames')

const router = Router();


// Configurar los routers:
router.get('/dinos', dinos)
router.post('/postDino', postDino)
router.get('/dinoNames', dinoNames)

module.exports = router;
