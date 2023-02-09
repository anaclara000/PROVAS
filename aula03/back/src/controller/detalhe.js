const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let detalhe = await prisma.detalhe.create({
        data: req.body
    });

    res.status(200).json(detalhe).end();
}

const createItems = async (req, res) => {
    let detalhe = await prisma.detalhe.createMany({
        data: [
          { id_produto: 1, id_venda: 4, quantidade: 1}
        ],
        skipDuplicates: true, // Skip 'Bobo'
        
    });
    res.status(200).json(detalhe).end();
    
}


const read = async (req, res) => {
    let detalhe = await prisma.detalhe.findMany();

    res.status(200).json(detalhe).end();
}

const readOne = async (req, res) => {
    let detalhe = await prisma.detalhe.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id_produto: true,
            id_venda: true,
            quantidade: true,
        }
    });

    //SELECT * FROM vendedor INNER JOIN publicacao ON vendedor.id = publicacao.vendedor_id WHERE ....

    res.status(200).json(detalhe).end();
}

const update = async (req, res) => {
    const detalhe = await prisma.detalhe.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(detalhe).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    createItems
}