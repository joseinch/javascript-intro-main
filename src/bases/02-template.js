const nombre ='Jose L'
const apellido='Quiñones'
const nombreCompleto=`${nombre} ${apellido}`

console.log(`Resultado: ${1+5}`)

function getSaludo(nombre) {
    return 'Hola '+ nombre
    
}
console.log(`Este es un texto: ${getSaludo(nombre)}`)
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)