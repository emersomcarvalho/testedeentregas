
const crypto = require('crypto');

const connections = require('../database/connections');


module.exports = {

    async list (req, res) {
        
        const empresas = await connections('empresa').select('*');
    
        return res.json(empresas);

    },

    async create(req, res) {

    const {name, pointPartida, pointDestino, date } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');

   await connections('empresa').insert({
        id,
        name,
        pointPartida,
        pointDestino,
        date,
        

    });

    return res.json({ id });

    },
    async delete(req, res ){
        const { id } = req.params;
        const empresa_id = req.headers.authorization;

        const incidents = await connections('empresa')
        .where('id', id)
        .select('empresa_id')
        .first();

        if (incidents.empresa_id != empresa_id ){
            return res.status(401).json({error: 'Operation not permitted.' })
        }
        await connections('empresa').where('id', id).delete();

        return res.status(204).send();
        
    }
};