

const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

function convertPokemonToHtml(pokemon) {
    return
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" 
                        alt="${pokemon.name}">

                </div>
            </li>
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .then((pokemonList) => {

        for(let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemonToLi(pokemon))

            document.getElementsByClassName('pokemons')
        }
    })
    .catch((error) => console.error(error))
