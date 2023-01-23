const conDB = require('../dao/dbProva');
const Geral = require('../models/vwGeral')

function listarGeral(req, res) {
    conDB.query(Geral.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

// function listaUm(req, res) {
//     conDB.query(Geral.toRead(), (err, result) => {
//         if(err == null) {
//             res.json(result).status(200).end();
//         }else {
//             res.status(500).end();
//         }
//     })
// };

module.exports = {
    listarGeral,
    // listaUm
}