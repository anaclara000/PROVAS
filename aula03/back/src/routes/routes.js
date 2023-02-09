const express = require('express');

const router = express.Router();

const Vendedor = require('../controller/Vendedor');
const Produto = require('../controller/produtos');
const Setor = require('../controller/Setor');
const Vendas = require('../controller/Vendas');
const Detalhe = require('../controller/Detalhe');

router.post('/Vendedor', Vendedor.create);
router.post('/Vendedor/criar', Vendedor.createItems);
router.get('/Vendedors', Vendedor.read);
router.get('/Vendedor/:id', Vendedor.readOne);

router.post('/Produto', Produto.create);
router.post('/Produto/criar', Produto.createItems);
router.get('/Produto', Produto.read);
router.get('/Produto/:id', Produto.readOne);

router.post('/Setor', Setor.create);
router.post('/Setor/criar', Setor.createItems)
router.get('/Setor', Setor.read);
router.get('/Setor/:id', Setor.readOne);
router.put('/update/:id', Setor.update);

router.post('/Vendas', Vendas.create);
router.post('/Vendas/criar', Vendas.createItems);
router.get('/Vendas', Vendas.read);
router.get('/Vendas/:id', Vendas.readOne);

router.post('/Detalhe', Detalhe.create);
router.post('/Detalhe/criar', Detalhe.createItems);
router.get('/Detalhe', Detalhe.read);
router.get('/Detalhe/:id', Detalhe.readOne);

module.exports = router;