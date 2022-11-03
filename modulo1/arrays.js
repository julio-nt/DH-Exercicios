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