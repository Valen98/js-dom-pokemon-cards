
/*
<li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li>

*/


const cardUL = document.querySelector(".cards")

function renderCards() {
    cardUL.innerHTML = ""
    for(let i = 0; i < data.length; i++) {
        let pokemon = data[i]
        let pokemonLi = document.createElement('li')

        pokemonLi.setAttribute('id', pokemon.id)

        pokemonLi.className = "card"

        pokemonLi.style.listStyle = 'none'

        let h1 = document.createElement('h1')
        let name = document.createTextNode(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))

        h1.appendChild(name)

        let img = document.createElement('img')
        img.src = data[i].sprites.other["official-artwork"].front_default
        img.className = 'card--img'

        pokemonLi.appendChild(h1)
        console.log(h1)
        pokemonLi.appendChild(img)

        for(let j = 0; j < pokemon.stats.length; j++) {
            let stats = pokemon.stats[j]
            let pokemonStatsLi = document.createElement('li')

            pokemonStatsLi.setAttribute('id', j)

            pokemonStatsLi.className = "card--text"

            let p = document.createTextNode(stats.stat.name.toUpperCase() + ": " + stats.base_stat)

            pokemonStatsLi.appendChild(p)
            pokemonLi.appendChild(pokemonStatsLi)

        }


        cardUL.appendChild(pokemonLi)
    }
}


function main() {
   renderCards()
}

main()