let dados = [];

const btn = document.querySelector(".btn-azul");
btn.addEventListener('click', () => {
    let articles = document.querySelectorAll("articles");
    for (i = 0; i < articles.length; i++) {

    }
});

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        dados = json
        for (item of dados) {
            const elementH1 = document.querySelector("h1");

            const elementoArticle = document.createElement("article");

            elementoArticle.innerHTML =
                `<img src="https://robohash.org/${item.id}?set=set2" alt="monstro">
        
          <div>
              <h2>${item.name}</h2>
              <p>${item.email}</p>
          </div>`;

            elementH1.insertAdjacentElement("afterend", elementoArticle);
            elementoArticle.classList.add("monstros");
        }
    })
