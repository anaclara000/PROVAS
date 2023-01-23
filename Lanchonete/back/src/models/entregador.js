const toReadAll = () => {
    return "SELECT * FROM entregador";
    }
    
const toRead = (model) => {
    return `SELECT * FROM entregador WHERE id_entregador = ${model.id_entregador}`
}
    

module.exports = {
    toReadAll,
    toRead
}