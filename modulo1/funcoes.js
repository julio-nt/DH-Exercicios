//Exercicio 1
function triplo(numero) {
	return numero * 3;
}

//Exercicio 2
function metade(numero) {
	return numero / 2;
}

//Exercicio 3
function quadruplo(numero) {
	return 4 * numero;
}

console.log(quadruplo(5));

//Exercicio 4
function calculaValorDevido(pesoDaRoupaSuja) {
	return pesoDaRoupaSuja * 5;
}

//Exercicio 5
function calculaValorDevido(pesoDeRoupaSuja) {
	let servico = 10;
	return pesoDeRoupaSuja * 3 + servico;
}

//Exercicio 6
function cartaoDeVisitas(nome, sobrenome) {
	return console.log(nome + ' ' + sobrenome);
}

cartaoDeVisitas('John', 'Bigodon');

//Exercicio 7
function multiplicar(a, b) {
	return a * b;
}

//Exercicio 8
function autonomia(quantidadeDeCombustivel, rendimento) {
	return rendimento * quantidadeDeCombustivel;
}

//Exercicio 9
function menorNumero(a, b) {
	if (a <= b) {
		return a;
	}
	if (b <= a) {
		return b;
	}
}

//Exercicio 10
//Lembre-se: a função validaCPF já está definida, mesmo que você não esteja vendo, basta executá-la!

if (validaCPF('576.524.020-85' == true)) {
	console.log('CPF válido');
} else {
	console.log('CPF inválido');
}

//Exercicio 11
function passoAPasso() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}
}

//Exercicio 12
function imprimir5Vezes() {
	for (let i = 0; i < 5; i++) {
		console.log('Estou aprendendo Loops');
	}
}

//Exercicio 13
function imprimirAzul(qtd) {
	for (let i = 0; i < qtd; i++) {
		console.log('Azul');
	}
}

//Exercicio 14
function osPares() {
	for (let i = 1; i <= 6; i++) {
		if (i % 2 == 0) {
			console.log('O numero ' + i + ' é par');
		}
	}
}

//Exercicio 15
function somaDosPares(n) {
	let soma = 0;
	for (let i = 1; i <= n; i++) {
		if (i % 2 == 0) {
			soma += i;
		}
	}
	return soma;
}

//Exercicio 16
// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
	let [dia, mes, ano] = dataDeNascimento.split('/');
	const d = new Date();
	const anoAtual = d.getFullYear();
	const mesAtual = d.getMonth() + 1;
	const diaAtual = d.getDate();
	ano = +ano;
	mes = +mes;
	dia = +dia;
	let quantosAnos = anoAtual - ano;
	if (mesAtual < mes || (mesAtual == mes && diaAtual < dia)) {
		quantosAnos--;
	}
	return quantosAnos < 0 ? 0 : quantosAnos;
}

// Escreva aqui sua função
function deixaEntrar(dataDeNascimento, censura) {
	calcularIdade(dataDeNascimento) > censura;
}
