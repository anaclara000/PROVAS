const Express = require('express');

const router = Express.Router();

const GeralController = require("../controller/vwGeralController");

router.get("/Geral/read", GeralController.listarGeral);

// router.get("/Geral/:id_aluno", GeralController.listaUm);

module.exports = router;