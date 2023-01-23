const conDB = require('../dao/dbProva');
const Alunos = require('../models/alunos')

function listarAlunos(req, res) {
    conDB.query(Alunos.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

function cadastrarAluno(req, res) {
    conDB.query(Alunos.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

function excluirAluno(req, res) {
    conDB.query(Alunos.toDel(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarAluno(req, res){
    conDB.query(Alunos.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function listaAluno(req, res) {
    conDB.query(Alunos.toRead(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};


module.exports = {
    listarAlunos,
    cadastrarAluno,
    editarAluno,
    excluirAluno,
    listaAluno
}