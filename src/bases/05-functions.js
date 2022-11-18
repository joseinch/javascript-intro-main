


// function saludar(xyz){
//     return `hello ${xyz}`
// }

const saludar = (name = 'Peter') => `Hello ${name}`


const nombre = 'Tony'

// console.log(saludar())

const getUser = () => ({ 
    uid: 'ABC123',
    username: 'Tony001'
 })

// console.log(getUser())

const heros = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
]
const {name} = heros.find((hero) => hero.id === 1) 
console.log(name)


