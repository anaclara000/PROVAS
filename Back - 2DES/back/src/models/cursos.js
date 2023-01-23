const toCreate  = (model) =>{
    return `INSERT INTO cursos VALUES (DEFAULT, '${model.curso}', '${model.duracao}')`;
}

const toReadAll = () => {
return "SELECT * FROM cursos ORDER BY id_curso asc";
}

const toRead = (model) => {
return `SELECT * FROM cursos WHERE id_curso = ${model.id_curso}`;
}

const toDel = (model)=>{
return `DELETE FROM cursos WHERE id_curso = '${model.id_curso}'`;
}

const toUpdate = (model)=>{
return `UPDATE cursos SET curso = '${model.curso}', duracao = '${model.duracao}' WHERE id_curso = ${model.id_curso}`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toRead
}