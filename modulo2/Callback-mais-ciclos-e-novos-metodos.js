//Callbacks

//Exercicio 1
function dobro(num) {
    return num*2
}

function triplo(num) {
    return num*3
}

function aplicar(num, callback) {
    return callback(num)
}

//Exercicio 2
const somar = (n1, n2) => n1 + n2
const subtrair = (n1, n2) => n1 - n2
const multiplicar = (n1, n2) => n1 * n2
const dividir = (n1, n2) => n1 / n2
const calculadora = (n1, n2, callback) => callback(n1, n2)

//Exercicio 3
function adicionarHttp(url) {
    return 'http://' + url
}

function processar (arr,func){
    const resultado = arr.map(el => func(el))
    return resultado
}

//Métodos de Arrays II

//Exercicio 1
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

const maiores = numeros.filter(el => el > 18)

//Ciclos II (for in/for of)

/Exercicio 1
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for(let prop in bart){
  console.log(bart[prop])
}

//Exercicio 2
let frase = "Essa semana vou no colearning";

for(prop of frase){
    console.log(prop)
}

//Objeto date

//Exercicio 1
let data = new Date()

data.setFullYear(2022)
data.setMonth(12)
data.setDate(02)

//Destructuring

//Exercicio 1
let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ ,bariloche, ,china, ] = destinosIncriveis