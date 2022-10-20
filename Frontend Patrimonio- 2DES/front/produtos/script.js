const corpo = document.querySelector("#corpo");

var patrimonio = [];
fetch("https://patrimoniomongo.herokuapp.com/read/")
.then(resp => {return resp.json()})
.then(data => {
       patrimonio = data.items;
        listarTudo();
});

function listarTudo() {
    patrimonio.forEach(e =>{
        let card = document.querySelector(".card").cloneNode(true);
        card.classList.remove('model');
        card.querySelector("#ni").innerHTML = e.ni;
        card.querySelector("#_id").innerHTML = e._id;
        card.querySelector("#aquisicao").innerHTML = e.aquisicao.slice(0,10);
        card.querySelector("#denominacao").innerHTML = e.denominacao;
        card.querySelector("#valor").innerHTML += e.valor;
        card.querySelector("#img").src = '../assets/' + e.img;
        card.querySelector("#del").setAttribute('onclick',`del(${e.ni})`);
        corpo.appendChild(card);
    })
}

const del = (ni) => {
    const options = { 
        "method": 'DELETE',
    };
    if(confirm("Tem certeza que quer excluir o item " + ni)){
        fetch("https://patrimoniomongo.herokuapp.com/del/ni/"+ni, options)
        .then(res => res.status)
        .then(res => {
            if(res == 200)
            window.location.reload();
        })
        .catch(err => console.error(err));
    }
}

const modal = document.querySelector(".modal");

function showModal() {
    modal.classList.toggle("model");
}


function cadastrar(){
    let NI = document.querySelector(".ni").value;
    let aquisicao = document.querySelector(".aquisicao").value;
    let denominacao = document.querySelector(".deno").value;
    let valor = document.querySelector(".valor").value;
    let imagem = document.querySelector(".img").value;

    let data = JSON.stringify({
        "ni": NI,
		"aquisicao": aquisicao,
		"denominacao": denominacao,
		"valor": valor,
		"img": imagem
    });

    fetch("https://patrimoniomongo.herokuapp.com/create", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp=> {return resp})
    .then(resp => { 
            alert("Produto cadastrado com sucesso");
            window.location.reload();
            showModal();
    })
}
