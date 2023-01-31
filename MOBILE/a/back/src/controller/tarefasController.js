const conDB = require('../dao/dbTarefas.js');
const tarefas = require('../models/tarefas')

const listartarefas = (req, res) => {
    conDB.query(tarefas.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

const cadastrartarefas = (req, res) => {
    conDB.query(tarefas.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const excluirtarefas = (req, res) => {
    conDB.query(tarefas.toDel(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(204).end();
        } else {
            res.status(400).end();
        }
    });
};

const editartarefas = (req, res) => {
    conDB.query(tarefas.toUpdate(req.body), (err, result) => {

        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(500).json(err).end();
        }
        
    });
};


const editartarefasStatus = (req, res) => {
    conDB.query(tarefas.toUpdateStatus(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listartarefas,
    excluirtarefas,
    cadastrartarefas,
    editartarefas,
    editartarefasStatus
}