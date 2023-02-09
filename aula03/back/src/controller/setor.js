const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.setor.create({
        data: req.body
    });

    res.status(200).json(setor).end();
}

const createItems = async (req, res) => {
    let setor = await prisma.setor.createMany({
        data: [
          { nome: 'Setor Feliz', comissao: '10%'}
        
        ],
        skipDuplicates: true, // Skip 'Bobo'
        
    });
    res.status(200).json(setor).end();
    
}


const read = async (req, res) => {
    let setors = await prisma.setor.findMany();

    res.status(200).json(setors).end();
}

const readOne = async (req, res) => {
    let setor = await prisma.setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            comissao: true,
            produto: true,
            vendedor: true
        }
    });

    //SELECT * FROM vendedor INNER JOIN publicacao ON vendedor.id = publicacao.vendedor_id WHERE ....

    res.status(200).json(setor).end();
}

const update = async (req, res) => {
    const setor = await prisma.setor.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    createItems
}