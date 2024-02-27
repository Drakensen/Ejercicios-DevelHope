async function runCode() {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    const personajes = data.results
    const newArray = personajes.map(item => item.name)

    return(newArray)
}

runCode().then((names) => console.log(names));