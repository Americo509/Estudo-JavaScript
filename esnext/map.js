const tecnologias = new Map()
tecnologias.set('react', { framwork: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.react)

const chavesVariadas = new Map([
    [function () {  }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],    
])

chavesVariadas.forEach((vl, ch) => {
    console.group(ch, vl)
})

console.log(chavesVariadas.size)
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)