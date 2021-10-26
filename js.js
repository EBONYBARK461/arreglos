let abecedario=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'ñ']
let conteo=abecedario.length

for (let index = 0; index < conteo; index++) {
    document.write(abecedario[index])

}

let colores=['azul', 'verde', 'cafe', 'rosado', 'violeta', 'amarillo',
 'negro', 'blanco', 'naranja', 'gris', 'morado', 'marron', 'cian',
  'beach', 'fucsia']
let cantidad=colores.length

for (let index = 0; index < cantidad; index++) {
    document.write(colores[index]+'<br>')

}

let casa = [ 
    {
        "color_muebles":"verde",
        "electrodomesticos":"nevera",
        "compra": new Date('1978-01-03'),
        "viven":7
    },
    {
        "color_muebles":"azul",
        "electrodomesticos":"microondas",
        "compra": new Date('2010-03-03'),
        "viven":5
    }
]
let objetos=casa.length

for (let index = 0; index < objetos; index++) {
    document.write(casa[index].color_muebles+'<br>')
    
}