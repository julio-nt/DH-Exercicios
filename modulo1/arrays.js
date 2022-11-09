//Exercicio 1
let listaDePares = [2, 4, 6, 8, 10];
let listaDeFilmes = [
	'A Sociedade do Anel',
	'As Duas Torres',
	'O Retorno do Rei',
];

//Exercicio 2
function quantosElementos(arr) {
    return 'Esse array tem ' + arr.length + ' elementos'
}

//Exercicio 3
function agregandoSabor(arr, add) {
    arr.push(add)
    return arr
}

//Exercicio 4
var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"];

// Seu loop aqui:
for (let i = 0; i<listaDeCarros.length; i++) {
    console.log('Nome do Carro: ' + listaDeCarros[i])
}

//Exercicio 5
function listarProdutos() {
	var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
	for(var i = 0; i < lista.length; i++){
		console.log(lista[i])
	}
}

//Exercicio 6
var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

//seu loop aqui
for (let i=0; i<listaDeLucro.length; i++) {
    lucroTotal += listaDeLucro[i]
}

//Exercicio 7
var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

//seu loop aqui:
for (let i=0; i<listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0) {
        totalNegativos++
    }
}

//Exercicio 8
var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
var busca = "Cajá";

//seu loop aqui
for (let i=0; i<listaDeFrutas.length; i++) {
    if (listaDeFrutas[i] == busca) {
        console.log('Sim, temos a fruta ' + busca + ' disponível')
    }
}

//Exercicio 9
let array1 = [ 1, 2, 3 ]
let array2 = [ 4, 5 ]

function moverItem(arrayA, arrayB){
  let ultimo = arrayA.pop()
 arrayB.push(ultimo) 
}

moverItem(array1, array2 )
// O arrayA terá os seguintes valores = [ 1 , 2 ]
// O arrayB terá os seguintes valores = [ 4, 5, 3 ]

//Exercicio 10
// Seu código vem aqui
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
        if (nomesDosPresentes.indexOf(nomeDoAluno) != -1) {
            return true
        } else {
            return false
    }
}

//Exercicio 11
// Seu código vem aqui
function transformaParaMaiusculo(palavras) {
    let versaoMaiuscula = []
    for (let i=0; i<palavras.length; i++) {
        versaoMaiuscula.push(palavras[i].toUpperCase())
    }
  return versaoMaiuscula
}