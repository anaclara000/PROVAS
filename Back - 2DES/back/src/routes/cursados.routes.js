const Express = require('express');

const router = Express.Router();

const CursadosController = require("../controller/CursadosController");

router.get("/read", CursadosController.listarCursados);
router.get("/Cursados/:id_Aluno", CursadosController.listaCursados);
router.post("/create", CursadosController.cadastrarCursados);
router.delete("/delete", CursadosController.excluirCursados);
router.delete("/aluno/:id_Aluno", CursadosController.IdAlunoDel);
router.delete("/curso/:id_Curso", CursadosController.IdCursoDel);
router.put("/update", CursadosController.editarCursados);

module.exports = router;