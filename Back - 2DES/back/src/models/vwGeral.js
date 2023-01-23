class listaCursados{

    alunos = [];
    cursos = [];
    cursados = [];

    constructor(data){
        this.idA = data.id_aluno;
        this.nome = data.nome;
        this.dataNasci = data.data_nasci;
        this.idCurso = data.id_curso;
        this.curso = data.cursos;
        this.duracao = data.duracao;
        this.dataCusado = data.data_cursado;
        
}
    addCursados(trat){
        this.alunos.push(trat);
        
    }

    static toReadAll() {
        return "SELECT * FROM vw_geral ORDER BY id_aluno";
        }

    // static toRead(data) {
    //     return `SELECT * FROM vw_geral WHERE id_aluno = ${data.id_aluno}`;
    //     }
    
}

module.exports = listaCursados;

    

// "id_aluno": 1,
// 		"nome": "Jair Messias Oliveira",
// 		"data_nasci": "25/08/2001",
// 		"id_curso": 1,
// 		"curso": "Desvendando Indústria 4.0",
// 		"duracao": "20",
// 		"data_cursado": "21/11/2022"