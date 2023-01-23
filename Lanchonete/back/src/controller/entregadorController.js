const conDB = require('../dao/dbForum');
const entregador = require('../models/entregador')

function listarEntregadores(req, res) {
    conDB.query(entregador.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};
function listarUmEntregador(req, res) {
    conDB.query(entregador.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};


module.exports = {
    listarEntregadores,
    listarUmEntregador
}