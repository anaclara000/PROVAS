const toCreate  = (model) =>{
    return `INSERT INTO lista VALUES (DEFAULT, '${model.descricao}', '${model.horario_inicial}', '${model.horario_encerramento}', ${model.status})`;
}

const toReadAll = () => {
    return "SELECT * FROM lista ORDER BY id_tarefa asc";
}
    
const toUpdate = (model)=>{
    return `UPDATE lista SET status = ${model.status} , horario_encerramento = '${model.horario_encerramento}' WHERE id_tarefa = ${model.id_tarefa}`;
}

const toUpdateStatus = (model)=>{
    return `UPDATE lista SET status = ${model.status} WHERE id_tarefa = ${model.id_tarefa}`;
}

const toDel = (model)=>{
    return `DELETE FROM lista WHERE id_tarefa = ${model.id_tarefa}`;
}
    
module.exports = {
    toReadAll,
    toCreate,
    toUpdate,
    toDel,
    toUpdateStatus
    
    }