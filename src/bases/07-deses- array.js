

const characters = ['Goku', 'Vegeta', 'Trunks']
// const goku = characters[0]
// const vegeta= characters[1]
// const trunks= characters[2]

const [g, v, t, goten = "no tiene valor"] = characters

const returnArray = ([letters, numbers]) => {
    return [letters, numbers] 
}

const [lettersP, numbersP] = returnArray(['XYZ',987])
console.log(lettersP, numbersP)