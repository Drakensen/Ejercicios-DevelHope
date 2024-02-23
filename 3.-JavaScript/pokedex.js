async function getRandomPokemon() {
    const pokemonID = Math.floor(Math.random()*1025)

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const data = await response.json()
    return data.id + "-" + data.name
}

getRandomPokemon().then((res) => console.log(res));