const Express = require('express');

const router = Express.Router();

const AlunosController = require("../controller/alunosController");

router.get("/read", AlunosController.listarAlunos);
router.get("/alunos/:id_aluno", AlunosController.listaAluno);
router.post("/create", AlunosController.cadastrarAluno);
router.delete("/delete", AlunosController.excluirAluno);
router.put("/update", AlunosController.editarAluno);

module.exports = router;