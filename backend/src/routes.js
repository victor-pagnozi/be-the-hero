const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//**LISTAGEM DAS ONGs */
routes.get('/ongs', OngController.index);
//**CADASTRO DAS ONGS*/
routes.post('/ongs', OngController.create);

//Rota para buscar casos especificos
routes.get('/profile', profileController.index);

//CADASTRO DOS CASOS
routes.post('/incidents', incidentController.create);
//LISTAR CASOS
routes.get('/incidents', incidentController.index);
//DELETAR CASO
routes.delete('/incidents/:id', incidentController.delete);

//Rota de login
routes.post('/sessions', SessionController.create);

module.exports = routes;