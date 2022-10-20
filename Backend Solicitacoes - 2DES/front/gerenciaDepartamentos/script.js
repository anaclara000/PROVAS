const listas = document.querySelector(".listas"); 
const lista = document.querySelector(".lista"); 

var departamentos = [];
fetch("http://localhost:3000/departamentos")
.then(resp => {return resp.json()})
.then(data => {
        departamentos = data;
        listarDepartamentos();
});

function listarDepartamentos() {
    departamentos.forEach(info =>{
        var lancamentos = lista.cloneNode(true);
        lancamentos.classList.remove("model");
        lancamentos.querySelector("#cod").innerHTML = info.Cod_Depto;
        lancamentos.querySelector("#nomeDepto").innerHTML = info.Nome_Depto;
        listas.appendChild(lancamentos);
    })
}


function excluirDepartamento(){
    let data = document.querySelector(".btn").value
    fetch(`http://localhost:3000/departamentos/${data}`, {
        "method":"DELETE"
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp !== undefined) {
            alert("Departamento Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir departamento!");
        }
    });
}