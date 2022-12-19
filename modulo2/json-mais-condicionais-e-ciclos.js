//Métodos de Strings
//Exercicio
function dominio(url) {
	return 'http://' + url;
}

//Arrow Functions
/*
function cincoNumeros() {
    return [1,2,3,4,5];
}

function multiplicarPorDois() {
  return 123 * 2 ;
}

function mostrarNome() {
  return "Meu nome é Ryan Dahl";
}
*/

let cincoNumeros = () => [1, 2, 3, 4, 5];

let multiplicarPorDois = () => 123 * 2;

let mostrarNome = () => 'Meu nome é Ryan Dahl';

//Condicionais IF ternário / Switch
//Exercicio 1
const dado = true;

if (dado) {
	console.log('É verdadeiro!');
} else {
	console.log('É falso!');
}

//Exercicio 2
let dia = "sabado";

function fimDeSemana(dia){
	//criação do switch
	switch(dia) {
		case 'segunda-feira':
			console.log(' você tem aulas!')
			break
		case 'quarta-feira':
			console.log(' você tem aulas!')
			break
		case 'sexta-feira':
			console.log(' você tem aulas!')
			break
		default:
			console.log('você não tem aulas')
	}
}

fimDeSemana(dia)

//Exercicio 3
let dia = 'sexta-feira'

function fimDeSemana(dia) {
    switch (dia) {
        case 'sexta-feira':
            console.log('Bom fim de semana!')
        break
        case 'segunda-feira':
            console.log('Boa semana!')
        break
        default:
        console.log('Bom dia!')
    }
}

//Ciclo For
//Exercicio 1
function papagaio(texto) {
    for (let i=1; i<=5; i++) {
        console.log(texto)
    }
}
