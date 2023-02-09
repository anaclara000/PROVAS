const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let venda = await prisma.vendas.create({
        data: req.body
    });

    res.status(200).json(venda).end();
}

const createItems = async (req, res) => {
    let vendas = await prisma.vendas.createMany({
        data: [
            {
                id_vendedor:1
            }
        ],

        skipDuplicates: true, // Skip 'Bobo'
        
    });
    res.status(200).json(vendas).end();
    
}


const read = async (req, res) => {
    let venda = await prisma.vendas.findMany(
        {
            select: {
                id: true,
                data: true,
                id_vendedor: true,
                detalhe: true,
            }
        }
       
    );

    res.status(200).json(venda).end();
}

const readOne = async (req, res) => {
    let vendas = await prisma.vendas.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            data: true,
            id_vendedor: true,
            detalhe: true,
        }
    });

    //SELECT * FROM vendedor INNER JOIN publicacao ON vendedor.id = publicacao.vendedor_id WHERE ....

    res.status(200).json(vendas).end();
}

const update = async (req, res) => {
    const vendas = await prisma.vendas.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    createItems
}