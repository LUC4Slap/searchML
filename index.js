// https://api.mercadolibre.com/sites/MLB/search?q=${prodPesq}
let input = document.querySelector('.search')
let btn = document.querySelector('.btnBuscar')
let result = document.querySelector('.result')

btn.addEventListener('click', async (e) => {
  let produtos;
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${input.value}`)
    .then(res => res.json())
    .then(prods => {
      produtos = prods.results
      produtos.map(prod => {
        let html = `
          <div class="produto">
            <div class="img">
              <img src="${prod.thumbnail}" />
            </div>
            <div class="info">
              <p>${prod.title}</p>
              <span>R$ ${prod.price}</span>
              <br />
              <a href="${prod.permalink}" target="_blank">Ver</a>
            </div>
          </div>
        `
        result.innerHTML += html
        console.log(prod);
      })
    })
})