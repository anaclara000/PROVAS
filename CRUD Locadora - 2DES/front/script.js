const listas = document.querySelector(".listas");
const lista = document.querySelector(".lista");
const modal = document.querySelector(".modal");

var locadoraMartins = [];
fetch("http://localhost:3000/locadora/clientes")
.then(resp => {return resp.json()})
.then(cliente => {
    locadoraMartins = cliente;
        listaDeClientes();
    });

function listaDeClientes() {
    locadoraMartins.forEach(info => {
        var line = lista.cloneNode(true);
            line.classList.remove("model");

            line.querySelector("#cod").innerHTML = info.codigo;
            line.querySelector("#nomeCli").innerHTML = info.nome;
            line.querySelector("#endCli").innerHTML = info.endereco;
            line.querySelector("#telCli").innerHTML = info.telefone;
            
            listas.appendChild(line);
    })

}

function cadastrar() {
    // let inpCod = document.querySelector("#codCad");
    // inpCod.disabled = true;
    let nomeCadastro = document.querySelector("#nomeCad").value;
    let endCadastro = document.querySelector("#endCad").value;
    let telCadastro = document.querySelector("#telCad").value;

    let data = JSON.stringify({
        "nome": nomeCadastro,
        "endereco": endCadastro,
        "telefone": telCadastro
    });

    console.log(data);

    fetch("http://localhost:3000/locadora/clientes", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })

    .then(res => {return res.json()})
    .then(resp => {
        if(resp.nome && resp.endereco && resp.telefone !== undefined){
            alert("Cliente Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar cliente");
            window.location.reload();
        }
     })
}


function showModal() {
    modal.classList.toggle("model");
}


function listaDeFuncionarios() {
    locadoraMartins.forEach(info => {
        var line = lista.cloneNode(true);
            line.classList.remove("model");

            line.querySelector("#cod2").innerHTML = info.codigo;
            // line.querySelector("#nomeCli2").innerHTML = info.nome;
            line.querySelector("#nomeFilm").innerHTML = info.nome;
            line.querySelector("#genero").innerHTML = info.genero;
            
            listas.appendChild(line);
    })

}