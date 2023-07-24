// const ladoCuadrado = 6
// const perimetroCuadrado = ladoCuadrado * 4
// const areaCuadrado = ladoCuadrado * ladoCuadrado 
// console.log({
//     ladoCuadrado,
//     perimetroCuadrado,
//     areaCuadrado
// })

// const ladoTriangulo1 = 3
// const ladoTriangulo2 = 4
// const baseTriangulo = 5
// const alturaTriangulo = 5.5

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2

// console.log({
//     perimetroTriangulo,
//     areaTriangulo
// })


console.group('Triangulo')
function triangulo(lado1,lado2,base,altura) {
    return{
        perTriangulo : lado1 + lado2+ base,
        areaTriangulo: (base*altura)/2
    }
    
}
console.log(triangulo(2,3,4,4.4))
console.groupEnd('Triangulo')
console.group('Cuadrado')
function cuadrado(lado1) {
    return{
        perCuadrado : lado1*4,
        areaCuadrado: lado1*lado1
    }
    
}
console.log(cuadrado(5))
console.groupEnd('Cuadrado')