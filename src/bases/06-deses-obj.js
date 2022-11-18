
const person = {
    name: 'steve rogers',
    age: 45,
    codeName: 'Iroman',
}

// const { name, age, codeName, power="no tiene powwer" } = personPadre

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

createHero = ({  name, age, codeName, power }) =>
({
    id: 112345234,
    name,
    age,
    codeName,
    power
})


console.log(createHero(person))  
