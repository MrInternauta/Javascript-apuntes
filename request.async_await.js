const fetch = require("node-fetch");

function handleError(err) {
    console.log(`ERROR: ${err}`)
}
async function getluke() {
    try {
        const response = await fetch('https://swapi.co/api/people/1/')
        const luke = await response.json()
        const responseHomeworld = await fetch(luke.homeworld)
        luke.homeworld = await responseHomeworld.json()
        console.log(`Luke nacio en ${luke.homeworld.name}`)
    } catch (error) {
        handleError(error)
    }
}

getluke()
