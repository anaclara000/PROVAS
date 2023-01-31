const Express = require('express');
const router = Express.Router();

const tarefasController = require("./controller/tarefasController");

router.get('/Tarefas/', tarefasController.listartarefas)
router.post('/Tarefas/', tarefasController.cadastrartarefas)
router.put('/Tarefas/', tarefasController.editartarefas)
router.put('/Tarefas/idUp/:id_tarefa', tarefasController.editartarefasStatus)
router.delete('/Tarefas/idDel/:id_tarefa', tarefasController.excluirtarefas)

module.exports = router;