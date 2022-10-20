const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "locadora"
});


function listarFilmes(req, res){
    let query = "SELECT * FROM filmes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarFilmes,
}
