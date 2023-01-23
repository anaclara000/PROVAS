const toCreate  = (model) =>{
    return `INSERT INTO alunos VALUES (DEFAULT, '${model.nome}', '${model.data_nasci}')`;
}

const toReadAll = () => {
return "SELECT * FROM alunos ORDER BY id_aluno asc";
}

const toRead = (model) => {
return `SELECT * FROM alunos WHERE id_aluno = ${model.id_aluno}`;
}

const toDel = (model)=>{
return `DELETE FROM alunos WHERE id_aluno = '${model.id_aluno}'`;
}

const toUpdate = (model)=>{
return `UPDATE alunos SET nome = '${model.nome}', data_nasci = '${model.data_nasci}' WHERE id_aluno = ${model.id_aluno}`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toRead
}