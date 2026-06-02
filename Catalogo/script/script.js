const filmes = [
     {
         título: "Vingadores",
         imagem:"https://www.themoviedb.org/movie/299534-avengers-endgame",
         descricao: "Ultimato",
     },
     {
         título: "Batman",
         imagem:"https://www.themoviedb.org/movie/155-the-dark-knight?language=pt-BR", 
         descrição: "Cavaleiro das trevas",
     },
     { 
         título: "Diário de uma Paixão",
         imagem:"https://www.themoviedb.org/movie/11036-the-notebook?language=pt-BR", 
         descrição: "Romance",
     },
     {
         título: "Esposa de Mentirinha",
         imagem:"https://www.themoviedb.org/movie/50546-just-go-with-it?language=pt-BR", 
          descrição: "Comédia",
     },
     {
         título: "Gente Grande 2",
         imagem:"https://www.themoviedb.org/movie/109418-grown-ups-2?language=pt-BR", 
          descrição: "Comédia",
     },
     {
         título: "Minha culpa",
         imagem:"https://www.themoviedb.org/movie/1010581-culpa-mia?language=pt-BR",
          descrição: "Drama",
     },
    ]

    const listaFilmes = document.getElementById ("listarFilmes")
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
            <div class="caed card-filme h-100">
              <img scr="${filme.imagem}" class="card-img-top">
              <div class="card-body">
              <h3>${filme.titulo}</h3>
              <p>${filme.descricao}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes"</button>
              </div>
              </div>
              </div>
              
        `

        
    });
}
