# 🔎 Base de Conhecimento - Pokédex (Imersão Dev c/ Google Gemini)

[![Demo do Projeto](https://img.shields.io/badge/Acesse%20a%20Demo-Link-blue)](https://yagorocha22.github.io/Base-de-Conhecimento/)

Bem-vindo(a) à Base de Conhecimento, uma **Pokédex interativa** desenvolvida durante a **10ª Edição da Imersão Dev com Google Gemini**!

Este projeto é uma ferramenta de busca e visualização de dados de Pokémon, permitindo que os usuários filtrem e encontrem informações detalhadas sobre diferentes espécies de maneira rápida e eficiente, utilizando dados locais (JSON) para performance.

## ✨ Funcionalidades

* **Busca em Tempo Real:** Filtre a lista de Pokémon instantaneamente ao digitar no campo de busca (`keyup`).
* **Filtro Abrangente:** Pesquise por **Nome**, **Tipo**, **Número (#ID)** ou **Descrição** do Pokémon (Lógica de filtragem implementada no `script.js`).
* **Visualização de Cards:** Cada Pokémon é exibido em um card informativo, contendo Nome, Tipo(s), Geração, Região e Descrição completa.
* **Design Responsivo:** O layout se adapta bem a diferentes tamanhos de tela (usando media queries no `style.css`).



## 💻 Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura básica da página (`index.html`). |
| **CSS3** | Estilização, incluindo variáveis e flexbox para layout moderno (`style.css`). |
| **JavaScript (ES6+)** | Lógica de busca, manipulação do DOM e renderização dinâmica dos cards (`script.js`). |
| **JSON** | Armazenamento estruturado e carregamento assíncrono dos dados dos Pokémon (`data.json`). |

## 🚀 Como Executar Localmente

Siga estes passos simples para rodar o projeto na sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/yagorocha22/Base-de-Conhecimento](https://github.com/yagorocha22/Base-de-Conhecimento)
    cd Base-de-Conhecimento
    ```
2.  **Abra o `index.html`:**
    Para garantir o carregamento correto do arquivo `data.json` via `fetch`, é altamente recomendado que você utilize um servidor local (como a extensão **Live Server** no VS Code) e não apenas abra o arquivo diretamente no navegador.
3.  **Comece a Pesquisar!**

## 🤝 Contribuições

Sinta-se à vontade para sugerir melhorias. Para contribuir, abra uma **Issue** ou siga o fluxo padrão:

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua funcionalidade (`git checkout -b feature/minha-melhoria`).
3.  Faça o Commit das suas alterações (`git commit -m 'feat: Adiciona nova melhoria'`).
4.  Faça o Push para a branch (`git push origin feature/minha-melhoria`).
5.  Abra um **Pull Request**.

## 📝 Licença

Este projeto está sob a [Licença MIT](LICENSE).

> **Resumo (Não Legal):** Você pode usar, copiar, modificar e distribuir o código deste projeto para fins comerciais ou não. Você deve apenas incluir o aviso de direitos autorais e a permissão (o próprio texto da licença) em todas as cópias ou partes substanciais do software.

---

## 🏆 Agradecimentos

Um agradecimento especial à **Alura** e ao **Google Gemini** por fornecerem o conhecimento e o ambiente necessários para desenvolver este projeto durante a **Imersão Dev 10ª Edição**.

---
*Desenvolvido por Yago Rocha*
*Conecte-se: [GitHub](https://github.com/yagorocha22) | [LinkedIn](https://www.linkedin.com/in/yago-rocha-da-costa/)*
