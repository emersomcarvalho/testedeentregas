const express = require('express');

const ongController = require('./controllers/empController');


const profileController = require('./controllers/profileController');



const routes = express.Router();

routes.get('/empresas', ongController.list);

routes.post('/empresas', ongController.create);

routes.delete('/empresas/:id', ongController.delete);


routes.get('/profile', profileController.list)


    
module.exports = routes;