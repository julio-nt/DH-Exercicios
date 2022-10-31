//Exercicio 1
let nome = 'João';
let idade = 17;

if (idade >= 18) {
	console.log('Você passou no nosso teste e já pode dirigir!');
} else {
	console.log('Olá, ' + nome);
}

//Exercicio 2
let saldo = 20.5;

if (saldo > 0) {
	console.log('Seu saldo está positivo! Gostaria de fazer um investimento?');
} else if (saldo < 0) {
	console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?');
}

//Exercicio 3
var idade = 15;

if (idade >= 18) {
	console.log('Você já pode dirigir!');
} else console.log('Ops, você ainda não tem a idade mínima para dirigir!');

//Exercicio 4
var idade = 40;

if (idade > 65) {
	console.log('Você já pode se aposentar');
} else {
	console.log('Você ainda não pode se aposentar');
}

//Exercicio 5
let estrangeiro = true;

if (estrangeiro) {
	console.log('Você poderia apresentar seu RNE, por favor?');
} else {
	console.log('Você poderia apresentar seu CPF, por favor?');
}

//Exercicio 6
let estrangeiro = true;

if (estrangeiro) {
	console.log('Você poderia apresentar seu RNE, por favor?');
} else {
	console.log('Você poderia apresentar seu CPF, por favor?');
}

//Exercicio 7
var petPeso = 7;

if (petPeso < 4) {
	console.log('Abaixo do Peso');
} else if (petPeso > 10) {
	console.log('Acima do Peso');
} else {
	console.log('Peso normal');
}

//Exercicio 8
var ladosIguais = 0;

if (ladosIguais == 3) {
	console.log('Equilátero');
} else if (ladosIguais == 2) {
	console.log('Isósceles');
} else if (ladosIguais == 0) {
	console.log('Escaleno');
}

//Exercicio 9
var produtoQtd = 3;
var produtoAtivo = true;

if (produtoQtd > 0 && produtoAtivo) {
	console.log('Você pode finalizar essa compra');
} else {
	console.log('Produto não está disponível para compra');
}

//Exercicio 10
var usuarioAltura = 170;
var usuarioIdade = 21;

if (usuarioAltura > 150 || usuarioIdade >= 21) {
	console.log('Você pode subir');
} else {
	console.log(
		'Desculpe, você não atende os requisitos para usar o brinquedo'
	);
}

//Exercicio 11
var diaSemana = 'sabado';

if (diaSemana != 'sabado' && diaSemana != 'domingo') {
	console.log('Você pode ir ao banco');
} else {
	console.log('O banco está fechado, tente outro dia');
}
