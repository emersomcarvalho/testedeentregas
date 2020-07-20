
const connections = require('../database/connections');

module.exports = {
async list(req, res) {

const empresa_id = req.headers.authorization;

const empresa = await connections('empresa').where('empresa_id', empresa_id).select('*');

return res.json(empresa)
},

    
    }
