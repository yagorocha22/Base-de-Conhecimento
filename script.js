// Seleciona os elementos do DOM (Document Object Model) com os quais vamos interagir
const cardContainer = document.querySelector(".card-container");
const inputBusca = document.querySelector("input");
const botaoBusca = document.querySelector("#botao-busca");

// Função para filtrar e exibir os Pokémon com base no termo de busca
function iniciarBusca() {
    // Pega o valor do input de busca e converte para minúsculas para uma comparação sem distinção de maiúsculas/minúsculas
    let termoBusca = inputBusca.value.toLowerCase();

    // Se o campo de busca estiver vazio, mostra todos os Pokémon e encerra a função
    if (termoBusca.trim() === "") {
        renderizarCards(dados); // Mostra todos se a busca estiver vazia
        return;
    }

    // Filtra o array 'dados' de Pokémon
    let dadosFiltrados = dados.filter(dado => {
        // Retorna true (mantém o Pokémon na lista) se o termo de busca for encontrado em qualquer um dos campos abaixo
        return dado.nome.toLowerCase().includes(termoBusca) ||
               dado.tipo.toLowerCase().includes(termoBusca) ||
               dado.numero.toLowerCase().includes(termoBusca) ||
               dado.descricao.toLowerCase().includes(termoBusca);
    });

    // Chama a função para renderizar apenas os Pokémon que passaram no filtro
    renderizarCards(dadosFiltrados);
}

// Função para criar e exibir os cards dos Pokémon na tela
function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa a área de cards para evitar duplicatas ao renderizar novamente
    // Itera sobre cada objeto (Pokémon) no array de dados fornecido
    for (let dado of dados) {
        // Cria um novo elemento <article> para ser o card do Pokémon
        let article = document.createElement("article");
        article.classList.add("card");
        // Define o conteúdo HTML do card usando os dados do Pokémon
        article.innerHTML = `
            <div class="cardP">
                <h2>${dado.nome}</h2>
                <p>${dado.numero}</p>
            </div>
            <p>${dado.tipo}</p>
            <p>${dado.Geracao}ª Geração | Região: ${dado.Regiao}</p>
            <p>${dado.descricao}</p>`;
        // Adiciona o card recém-criado ao container de cards na página
        cardContainer.appendChild(article);
    }
}

// Adiciona um "ouvinte" para o evento de clique no botão de busca, que chama a função iniciarBusca
botaoBusca.addEventListener("click", iniciarBusca);
// Adiciona um "ouvinte" para o evento 'keyup' (quando uma tecla é solta), permitindo a busca em tempo real
inputBusca.addEventListener("keyup", iniciarBusca); // Adiciona busca em tempo real

// Usa a API fetch para buscar os dados do arquivo data.json de forma assíncrona
const resposta = await fetch("data.json");
// Converte a resposta da requisição para o formato JSON
const dados = await resposta.json();

// Chama a função renderizarCards pela primeira vez para exibir todos os Pokémon ao carregar a página
renderizarCards(dados);
