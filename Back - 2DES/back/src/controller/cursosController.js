const conDB = require('../dao/dbProva');
const Cursos = require('../models/cursos')

function listarCursos(req, res) {
    conDB.query(Cursos.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

function cadastrarCurso(req, res) {
    conDB.query(Cursos.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

function excluirCurso(req, res) {
    conDB.query(Cursos.toDel(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarCurso(req, res){
    conDB.query(Cursos.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function listaCurso(req, res) {
    conDB.query(Cursos.toRead(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};


module.exports = {
    listarCursos,
    cadastrarCurso,
    editarCurso,
    excluirCurso,
    listaCurso
}