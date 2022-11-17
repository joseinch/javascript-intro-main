const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New',
        zip: 121212,
        lat: 14.85,
        long: 34.66

    }
}

const persona2 = {...persona};
persona2.nombre = 'peter'

console.log(persona)
console.log(persona2)