const Express = require('express');

const router = Express.Router();

const clientesController = require('./controller/clientesController');
router.get("/locadora/clientes", clientesController.listarClientes);
router.post("/locadora/clientes", clientesController.cadastrarCliente);
router.delete("/locadora/clientes", clientesController.excluirCliente);

const filmesController = require('./controller/filmesController');
router.get("/locadora/filmes", filmesController.listarFilmes);

const locacoesController = require('./controller/locacoesController');
router.get("/locadora/locacoes", locacoesController.listarLocacoes);

module.exports = router;