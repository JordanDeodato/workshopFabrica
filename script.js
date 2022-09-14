let dados = [];
let contadorId = 0;
const elementH1 = document.querySelector("h1");
const btn = document.querySelector("#limpar");
const btnAdd = document.querySelector("#adicionar");


btn.addEventListener('click', () => {
    let articles = document.querySelectorAll("article");
    for (i = 0; i < articles.length; i++) {
        articles[i].remove();
    }
    dados = [];
    elementH1.innerText = `${dados.length} monstros`;
});

btnAdd.addEventListener('click', function adicionarMonstros() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            dados.push(json)
            let add = json
            const elementoArticle = document.createElement("article");
            elementoArticle.classList.add("monstros");

            elementoArticle.innerHTML = `
        <img src="https://robohash.org/${add[contadorId].id}?set=set2" alt="monstro">
        
            <div>
                <h2>${add[contadorId].name}</h2>
                <p>${add[contadorId].email}</p>
            </div>
        `;
            elementH1.insertAdjacentElement("afterend", elementoArticle);
            elementH1.innerText = `${dados.length} monstros`;
        })
    contadorId += 1;
    console.log(contadorId);
});

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
// })
//     .then((response) => {
//         if(response.status === 200) alert('sucesso!')
//         else alert('ALGO DEU ERRADO')
//         return response.json();
//     })
//     .then((json) => {
//         dados = json.slice(0, 5);
//         elementH1.innerText = `${dados.length} monstros`;

//         for (item of dados) {
//             const elementoArticle = document.createElement("article");
//             elementoArticle.classList.add("monstros");


//             elementoArticle.innerHTML = `
//             <img src="https://robohash.org/${item.id}?set=set2" alt="monstro">

//             <div>
//                 <h2>${item.name}</h2>
//                 <p>${item.email}</p>
//             </div>
//             `;

//             elementH1.insertAdjacentElement("afterend", elementoArticle);           
//     }
// });


async function renderizar() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dadosJSON = await response.json();

    dados = dadosJSON.slice(0, 5);
    elementH1.innerText = `${dados.length} monstros`;

    for (item of dados) {
        const elementoArticle = document.createElement("article");
        elementoArticle.classList.add("monstros");

        elementoArticle.innerHTML = `
        <img src="https://robohash.org/${item.id}?set=set2" alt="monstro">
        
            <div>
                <h2>${item.name}</h2>
                <p>${item.email}</p>
            </div>
        `;
        elementH1.insertAdjacentElement("afterend", elementoArticle);
    }
}

renderizar();

console.log("primeiro");