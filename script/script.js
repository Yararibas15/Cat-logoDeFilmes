const filmes = [
    {
        título: "Vingadores",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao: "Ultimato",
    },
    {
        título: "Batman",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
        descrição: "Cavaleiro das trevas",
    },
    {
        título: "Diário de uma Paixão",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/hO6k34ZNDwWzgcnzFbqYf2Rjg5W.jpg",
        descrição: "Romance",
    },
    {
        título: "Esposa de Mentirinha",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/glC4pDnSieQ9NGU501rfVIqUCTB.jpg",
        descrição: "Comédia",
    },
    {
        título: "Gente Grande 2",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/fKYW0oKPvy6HF8x5egL1ljC36xb.jpg",
        descrição: "Comédia",
    },
    {
        título: "Minha culpa",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/a59iGvF609yAZ5tfZUoQ3XipeQH.jpg",
        descrição: "Drama",
    },
]
const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.título}</h3>
                        <p>${filme.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.título}')">Ver detalhes"</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
    Swal.fire({
        title: título,
        text: "Mais informaçaões de Filme",
        icon: "info"
    })
}
