const toCreate  = (model) =>{
    return `INSERT INTO cursados VALUES ('${model.id_Aluno}', '${model.id_Curso}', '${model.data_cursado}')`;
}

const toReadAll = () => {
return "SELECT * FROM cursados";
}

const toRead = (model) => {
return `SELECT * FROM cursados WHERE id_Aluno = ${model.id_Aluno}`;
}

const toDelAluno = (model)=>{
return `DELETE FROM cursados WHERE id_Aluno = '${model.id_Aluno}'`;
}

const toDelCurso = (model)=>{
    return `DELETE FROM cursados WHERE id_Curso = '${model.id_Curso}'`;
    }

const toUpdate = (model)=>{
return `UPDATE cursados SET id_Aluno = '${model.id_Aluno}', id_Curso = '${model.id_Curso}', data_cursado = '${model.data_cursado}'`;
}

module.exports = {
toReadAll,
toCreate,
toDelAluno,
toDelCurso,
toUpdate,
toRead
}