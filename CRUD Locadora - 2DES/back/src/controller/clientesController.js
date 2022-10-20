const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "locadora"
});

function listarClientes(req, res){
    let query = "SELECT * FROM clientes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `INSERT INTO clientes VALUES (DEFAULT, '${req.body.nome}', '${req.body.endereco}', ${req.body.telefone})`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();

            
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirCliente(req, res) {
    let query = `DELETE FROM produtos WHERE cod = '${req.body.codigo}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarClientes,
    cadastrarCliente,
    excluirCliente
}
