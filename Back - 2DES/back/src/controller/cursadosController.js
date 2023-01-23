const conDB = require('../dao/dbProva');
const Cursados = require('../models/cursados')

function listarCursados(req, res) {
    conDB.query(Cursados.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

function IdCursoDel(req, res) {
    conDB.query(Cursados.toDelCurso(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

function IdAlunoDel(req, res) {
    conDB.query(Cursados.toDelAluno(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};


function cadastrarCursados(req, res) {
    conDB.query(Cursados.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

function excluirCursados(req, res) {
    conDB.query(Cursados.toDel(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarCursados(req, res){
    conDB.query(Cursados.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function listaCursados(req, res) {
    conDB.query(Cursados.toRead(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};


module.exports = {
    listarCursados,
    cadastrarCursados,
    editarCursados,
    excluirCursados,
    listaCursados,
    IdCursoDel,
    IdAlunoDel
}