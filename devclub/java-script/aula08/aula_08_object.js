/*
1. Strings -> Textos.
2. Numbers -> Números
3. Boolean -> boleano
4. Object -> Objetos
*/

let rodolfo = {
    name: "Rodolfo",
    age: 25,
    address: {
        street: "Dos Bobos",
        number: 0,
        city: "São Paulo",
        state: "SP",
        country: "Brasil"
    }
}

rodolfo.address.number = 1

console.log(rodolfo.address.number)