var ulrProdutos = 'http://localhost:3000/Produto'
var urlFuncionarios = 'http://localhost:3000/Vendedors'
var urlSetor = 'http://localhost:3000/Setor'
var urlVendas = 'http://localhost:3000/Vendas'

var Produtos = []
var Funcionarios = []
var Setor = []
var Vendas = []

var cardProdutos = document.querySelector('.produtos')
var cardFunc = document.querySelector('.vendedor')
var cardSetor = document.querySelector('.setor')
var cardVendas = document.querySelector('.vendas')

function carregar() {
    const options = { method: 'GET' };
    fetch(ulrProdutos, options)
        .then(res => res.json())
        .then(res => {
            Produtos = res;
            preencherProd()
        })    

        const options2 = { method: 'GET' };
        fetch(urlFuncionarios, options2)
        .then(res => res.json())
        .then(res => {
            Funcionarios = res;
            preencherFunc()
        })  

        const options3 = { method: 'GET' };
        fetch(urlSetor, options3)
        .then(res => res.json())
        .then(res => {
            Setor = res;
            preencherSetor()
        })    

        const options4 = { method: 'GET' };
        fetch(urlVendas, options4)
        .then(res => res.json())
        .then(res => {
            Vendas = res;
            preencherVendas()
        })    
}


function preencherProd() {
    Produtos.forEach(p => {
        var lista = cardProdutos.cloneNode(true)
         lista.style.display = 'flex'
        
            lista.querySelector('.nome').innerHTML = p.nome
            lista.querySelector('.valor').innerHTML = "Valor(un): R$" + p.valor
            // var btn = document.createElement('button')
            // btn.classList = 'btnAdd'
            // lista.appendChild(btn)
            console.log(p.nome)
            document.querySelector('.container').appendChild(lista)
    })
}

function preencherFunc(){
    Funcionarios.forEach(f => {

        var lista2 = cardFunc.cloneNode(true)
        lista2.style.display = 'flex'
        
            lista2.querySelector('.nome_vendedor').innerHTML = f.nome
            lista2.querySelector('.salario').innerHTML = "Salário: R$" + f.salario
            document.querySelector('.container2').appendChild(lista2)
         console.log(f)
    })

}

function preencherSetor(){
    Setor.forEach(s => {

        var lista2 = cardSetor.cloneNode(true)
        lista2.style.display = 'flex'
        
            lista2.querySelector('.nome').innerHTML = s.nome
            lista2.querySelector('.comissao').innerHTML = "Comissão: R$" + s.comissao
            document.querySelector('.container3').appendChild(lista2)
         
    })
}

function preencherVendas(){
    Vendas.forEach(v => {

        var lista2 = cardVendas.cloneNode(true)
        lista2.style.display = 'flex'
        lista2.querySelector('.idVenda').innerHTML = v.id
            lista2.querySelector('.id_vendedor').innerHTML = "Id Vendedor: " + v.id_vendedor
            lista2.querySelector('.data').innerHTML = "Data: " + v.data.slice(0,10)
            console.log(v)
            v.detalhe.forEach(d =>{
                lista2.querySelector('.detalhe').innerHTML = "Id Produto: " + d.id_produto
                
                console.log(d)
            })
           
            
            document.querySelector('.container4').appendChild(lista2)
         
    })
}


function cadProd(){
    
var cadProd = document.querySelector('.cadProd')
cadProd.classList.remove('model')

let inptNome = document.querySelector('.inptNome').value;
let inptValor = document.querySelector('.inptValor').value;
let inptSetor = document.querySelector('.inptSetor').value;

 

let options = JSON.stringify({
    "nome": inptNome,
    "valor": parseFloat(inptValor),
    "setor_produtos": parseInt(inptSetor)
})

console.log(options)

fetch("http://localhost:3000/Produto", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": options
})
    .then(resp => { return resp })
    .then(resp => {
        alert("Pedido cad");
        window.location.reload()

    })

}

function cadProd(){
    
    var cadProd = document.querySelector('.cadProd')
    cadProd.classList.remove('model')
    
    let inptNome = document.querySelector('.inptNome').value;
    let inptValor = document.querySelector('.inptValor').value;
    let inptSetor = document.querySelector('.inptSetor').value;
    
     
    
    let options = JSON.stringify({
        "nome": inptNome,
        "valor": parseFloat(inptValor),
        "setor_produtos": parseInt(inptSetor)
    })
    
    console.log(options)
    
    fetch("http://localhost:3000/Produto", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            alert("Pedido cad");
            window.location.reload()
    
        })
    
    }

function abrirModal(){
    var cadProd = document.querySelector('.cadProd')
    cadProd.classList.remove('model')
}

function fecharModal(){
    var cadProd = document.querySelector('.cadProd')
    cadProd.classList.add('model')
}


function cadVendedor(){

    
    let inptNomeVendedor = document.querySelector('.inptNomeVendedor').value;
    let inptSalario = document.querySelector('.inptSalario').value;
    let inptSetorVendedor = document.querySelector('.inptSetorVendedor').value;
    
     
    
    let options = JSON.stringify({
        "nome": inptNomeVendedor,
        "salario": parseFloat(inptSalario),
        "setor_vendedor": parseInt(inptSetorVendedor)
    })
    
    console.log(options)
    
    fetch("http://localhost:3000/Vendedor", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            alert("Vendedor cadastrado");
            window.location.reload()
    
        })
    
    }


function abrirModalVendedor(){
    var cadVend = document.querySelector('.cadVendedor')
    cadVend.classList.remove('model')
}

function fecharModalVendedor(){
    var cadVend = document.querySelector('.cadVendedor')
    cadVend.classList.add('model')
}

function cadSetor(){

    
    let inptNomeSetor = document.querySelector('.inptNomeSetor').value;
    let inptComissao = document.querySelector('.inptComissao').value;
    
    let options = JSON.stringify({
        "nome": inptNomeSetor,
        "comissao": inptComissao
    })
    
    console.log(options)
    
    fetch("http://localhost:3000/Setor", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            alert("Setor cadastrado");
            window.location.reload()
    
        })
    
    }


function abrirModalSetor(){
    var cadSetor = document.querySelector('.cadSetor')
    cadSetor.classList.remove('model')
}

function fecharModalSetor(){
    var cadSetor = document.querySelector('.cadSetor')
    cadSetor.classList.add('model')
}

function cadVenda(){

    let inptData = document.querySelector('.inptData').value;
    let inptVendedor = document.querySelector('.inptVendedor').value;
    
    let options = JSON.stringify({
        "data": inptData,
        "id_vendedor": parseFloat(inptVendedor)
    })
    
    console.log(options)
    
    fetch("http://localhost:3000/Vendas", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            alert("Venda cadastrada");
            window.location.reload()
    
        })

    
    }


function abrirModalVenda(){
    var cadVenda = document.querySelector('.cadVendas')
    cadVenda.classList.remove('model')

    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    dataAtual = ano + '-' + mes + '-' + dia;
    document.querySelector(".inptData").value = dataAtual + "T11:18:00.968Z";
}

function fecharModalVenda(){
    var cadVenda = document.querySelector('.cadVendas')
    cadVenda.classList.add('model')
}

function cadDetalhe(e){

    let inptVendaId = document.querySelector('#IdVenda').value;
    let inptProd = document.querySelector('.inptProd').value;
    let inptQuantidade = document.querySelector('.inptQuantidade').value;
    
console.log(inptVendaId)
    let options2 = JSON.stringify({
        "id_produto": parseInt(inptProd),
        "quantidade": parseInt(inptQuantidade),
        "id_venda": parseInt(inptVendaId)
    })

    fetch("http://localhost:3000/Detalhe", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": options2
})
    .then(resp => { return resp })
    .then(resp => {
        alert("Setor cadastrado");
        window.location.reload()

    })
}

function abrirModalDetalhe(e){
    var idVenda = e.parentNode.querySelector(".idVenda").innerHTML

    document.querySelector("#IdVenda").value = idVenda

    console.log(idVenda)
    var cadDetalhe = document.querySelector('.cadDetalhe')
    cadDetalhe.classList.remove('model')
}

function fecharModalDetalhe(){
    var cadDetalhe = document.querySelector('.cadDetalhe')
    cadDetalhe.classList.add('model')
}