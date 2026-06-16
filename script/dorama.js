const dorama = [
    {
        título:"Amor e batatas",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/jLsYpsmWuYunFWbje041flWpnGM.jpg",
        descrição: "A vida de uma pesquisadora de batatas vira de cabeça para baixo quando um novo diretor chega ao laboratório, provando que o amor pode brotar nos lugares mais inesperados.",

    },
    {
        título: "Soriso Real",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/bvUvdwfeDBlyb9sg85FulzGZs0P.jpg",
        descrição: "Em meio a uma disputa pela herança, um charmoso herdeiro entra em conflito com uma funcionária e seu enorme sorriso, que ele simplesmente não suporta.",

    },
    {
        título: "Beleza Verdadeira",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/g7ocbs1UieVybM3kypqXBfPczaL.jpg",
        descrição: "Uma adolescente insegura aprende os truques da maquiagem e começa a fazer um enorme sucesso na escola. Mas não vai ser fácil manter as aparências.",
    },

    {
        título: "Jogada de Vitória",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ilYn5vYyhigN6wmVBs7dH2TJ7LS.jpg",
        descrição: "Uma pequena criatura da floresta e um pássaro majestoso trocam de corpo e precisam se unir para sobreviver à aventura mais incrível de suas vidas.",
    },

    {
        título: "O amor mora ao lado",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lHSnzui4skTidHkAwQ2Qaccdokr.jpg",
        descrição: "Na tentativa de recomeçar a vida, uma mulher retorna à Coreia e se envolve com alguém do passado. O problema é que existe uma história complicada entre os dois.",
    },

    {
        título: "Cães de Caça",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/uFNHrunRIlyzRlRS7c9InUVgFDa.jpg",
        descrição: "Dois jovens boxeadores unem forças para enfrentar inimigos impiedosos com sede de sangue, arriscando as próprias vidas para fazer justiça e proteger as pessoas que amam.",
    }
]


const listaDorama = document.getElementById("listaDorama");
function mostrarDorama(lista) {
    listaDorama.innerHTML = ""
    lista.forEach(dorama => {
        listaDorama.innerHTML += `
            <div class="col-md-4">
                <div class="card card-dorama h-100">
                    <img src="${dorama.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${dorama.título}</h3>
                        <p>${dorama.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${dorama.titulo}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarDorama(doramas)

function verDetalhes(titulo) {
    Swal.fire({
        title: título,
        text: "Mais informaçaões de Dorama",
        icon: "info"
    })
}
