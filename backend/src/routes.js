const express = require('express');

const empController = require('./controllers/empController');


const profileController = require('./controllers/profileController');



const routes = express.Router();

routes.get('/empresas', empController.list);

routes.post('/empresas', empController.create);

routes.delete('/empresas/:id', empController.delete);


routes.get('/profile', profileController.list)


    
module.exports = routes;