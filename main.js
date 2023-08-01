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
console.group('circulo')
// const radioCirculo = 3
// const diametroCirculo = radioCirculo * 2
// const PI= 3.1415

// const circunferencia = diametroCirculo * PI
// const areaCirculo = (radioCirculo ** 2)* PI
// console.log({
//     radioCirculo,
//     diametroCirculo,
//     PI,
//     circunferencia,
//     areaCirculo
// })
function calcularCirculo(radio) {
    const diametro = radio * 2
    return{
        diametro : radio * 2,
        circunferencia : (radio*2) * Math.PI.toFixed(3),
        area : Math.pow(radio,2)* Math.PI.toFixed(3)
    }
    
}
console.log(calcularCirculo(4))
console.groupEnd('circulo')

// Holaas