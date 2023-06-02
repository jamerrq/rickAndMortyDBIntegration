// Dirígete a la carpeta routes y crea un archivo llamado index.js.
// Dentro de este deberás importar todos tus controladores.
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const postUser = require('../controllers/postUser');

// También deberás importar la función Router de express.
const { Router } = require('express');
const router = Router();


// Update routes
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/login', postUser);
router.post('/favorite', postFav);
router.delete('/favorite/:id', deleteFav);


// Finalmente exporta tu router.
module.exports = router;
