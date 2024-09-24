
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
const generationUL = document.querySelector('.generation')

function renderCards(generation) {
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
        img.src = renderImage(pokemon, generation)
        img.className = 'card--img'

        let buttonUL = document.createElement('ul')
        let buttonLi = document.createElement('li')
        buttonLi.className = 'buttonLi'
        buttonUL.className = 'buttonUL'
        let generationArray = ['official artwork','generation 1', 'generation 2', 'generation 3']
        for(let i = 0; i < 4; i++) {
          let button = document.createElement("button")
          button.addEventListener("click", () => img.src = renderImage(pokemon, i))
          button.textContent = generationArray[i] 
          buttonLi.setAttribute('id', i)
          buttonLi.className = 'generationButtons'
          buttonLi.appendChild(button)
        }

        buttonUL.appendChild(buttonLi)
        pokemonLi.appendChild(h1)
        pokemonLi.appendChild(img)

        pokemonLi.appendChild(buttonUL)

        for(let j = 0; j < pokemon.stats.length; j++) {
            let stats = pokemon.stats[j]
            let pokemonStatsLi = document.createElement('li')

            pokemonStatsLi.setAttribute('id', j)

            pokemonStatsLi.className = "card--text"

            let p = document.createTextNode(stats.stat.name.toUpperCase() + ": " + stats.base_stat)

            pokemonStatsLi.appendChild(p)
            pokemonLi.appendChild(pokemonStatsLi)

        }

        for(let k = 0; k < pokemon.game_indices.length; k++) {
          let game = pokemon.game_indices[k]
          let pokemonGameLi = document.createElement('li')
          pokemonGameLi.setAttribute('id', k)
          pokemonGameLi.style = 'margin-left: 1rem; margin-bottom: 0.5rem;'
          let p = document.createTextNode(game.version.name)

          pokemonGameLi.appendChild(p)
          pokemonLi.appendChild(pokemonGameLi)
        }

        cardUL.appendChild(pokemonLi)
    }
}

function renderImage(pokemon, num) {
  switch(num) {
    case 1: 
      return pokemon.sprites.versions['generation-i']['red-blue'].front_default
    case 2:
      return pokemon.sprites.versions['generation-ii'].crystal.front_default
    case 3:
      return pokemon.sprites.versions['generation-iii'].emerald.front_default
    default:
      return pokemon.sprites.other["official-artwork"].front_default
  }
}


function main() {
  renderCards(0)
}

main()