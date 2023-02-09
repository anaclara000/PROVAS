const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let produto = await prisma.produtos.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const createItems = async (req, res) => {
    let produtos = await prisma.produtos.createMany({
        data: [
          { nome: 'Parafuso', valor: 10.20 , setor_produtos:1 },
          { nome: 'Régua', valor: 5.38, setor_produtos:2 },
          { nome: 'Lâmpada', valor: 50.98, setor_produtos: 1},
          { nome: 'Mola', valor: 3.33, setor_produtos: 2},
        ],
        skipDuplicates: true, // Skip 'Bobo'
    })

    res.status(200).json(produtos).end();
}




const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

const readOne = async (req, res) => {
    let setor = await prisma.setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            valor: true,
            setor: true,
        }
    });

    //SELECT * FROM vendedor INNER JOIN publicacao ON vendedor.id = publicacao.vendedor_id WHERE ....

    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    readOne,
    createItems
}