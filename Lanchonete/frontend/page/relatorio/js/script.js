var urlPedidos = 'http://localhost:3000/Pedidos'
var relatorio = []
var cardPedido = document.querySelector('.pedido')

function carregar() {
    const options = { method: 'GET' };
    fetch(urlPedidos, options)
        .then(res => res.json())
        .then(res => {
            pedidos = res;
            preencher();
        })    
}


function preencher() {
    relatorio.forEach(r => {

        var lista = cardPedido.cloneNode(true)

        lista.querySelector('.produto').innerHTML = r.produto
        
    })
}