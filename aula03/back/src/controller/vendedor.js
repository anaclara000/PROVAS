const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const createItems = async (req, res) => {
    let vendedor = await prisma.vendedor.createMany({
        data: [
          { nome: 'José', salario: 1000.54, setor_vendedor: 3}
        ],
        skipDuplicates: true, // Skip 'Bobo'
        
    });
    res.status(200).json(vendedor).end();
    
}

const readOne = async (req, res) => {
    let vendedor = await prisma.vendedor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            salario: true,
            setor: true,
            vendas: true
        }
    });

    //SELECT * FROM vendedor INNER JOIN publicacao ON vendedor.id = publicacao.vendedor_id WHERE ....

    res.status(200).json(vendedor).end();
}

const read = async (req, res) => {
    let vendedors = await prisma.vendedor.findMany({
    });

    //SELECT email, nome FROM vendedor WHERE email = ''

    res.status(200).json(vendedors).end();
}


module.exports = {
    create,
    read,
    readOne,
    createItems
}