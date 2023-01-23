const Express = require('express');

const router = Express.Router();

const CursosController = require("../controller/CursosController");

router.get("/read", CursosController.listarCursos);
router.get("/Cursos/:id_curso", CursosController.listaCurso);
router.post("/create", CursosController.cadastrarCurso);
router.delete("/delete", CursosController.excluirCurso);
router.put("/update", CursosController.editarCurso);

module.exports = router;