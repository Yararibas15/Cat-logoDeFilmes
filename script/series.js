const serie = [
    {
        título:"Off Campus: Amores Improváveis",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/iQ1WbmoC08ql4qRZkfUD2LlzNOL.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        descrição: "Hannah Wells dá aulas ao capitão do hóquei, Garrett Graham, em troca de dicas para conquistar o paquera. O acordo vira uma conexão quando eles encaram o passado. Os amigos Logan, Dean, Tucker e Allie vivem a vida universitária e o amor.",

    },
    {
        título: "Grey's Anatomy",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/vrChGRs0DsoCoaeHif8PlZY637Q.jpg",
        descrição: "Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho."

    },
    {
        título: "You",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ivqi64qY0S3ZAimvjlqXLEH7D6W.jpg",
        descrição: "Um homem obsessivo e perigosamente charmoso vai ao extremo para entrar na vida das mulheres que o fascinam.",
    },

    {
        título: "Jujutsu Kaisen",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/8R1mMSC1gX1cg5ed7ns49JOEqw3.jpg",
        descrição: "Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição.",
    },

    {
        título: "The Walking Dead",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg",
        descrição: "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade."
    },
    {
        título: "Spider-Noir",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/rfrzXSaiuvRMLo8PRQds0TfFrZC.jpg",
        descrição: "O detetive particular Ben Reilly é contratado para casos simples... até que gângsteres, monstros e uma misteriosa femme fatale tecem uma teia que o obriga a confrontar seu passado como o único super-herói de Nova York: O Spider.",
    },

]

const listaSerie = document.getElementById("listaSerie");
function mostrarSerie(lista) {
    listaSerie.innerHTML = ""
    lista.forEach(serie => {
        listaSerie.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${serie.título}</h3>
                        <p>${serie.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarSerie(serie)

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informaçaões da Série",
        icon: "info"
    })
}
