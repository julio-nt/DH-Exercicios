//Elevador
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

for (let i=0; i<moradores.length; i++) {
    if (i % 2 == 0) {
        console.log('O morador '+ moradores[i]+ ' pode usar o elevador')
    }
}

//Dados de um usuário
function maiorAlto(array) {
    //Seu código vem aqui
    if (array[1] >= 18 && array[2] >= 170) {
        return true
    } else {
        return false
    }
}

//Academia
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB=[]
var grupoC =[]

for (let i=0; i<alunos.length; i++) {
    if (alunos[i] >= 170) {
        grupoC.push(alunos[i])
    } else if (alunos[i] >= 160) {
        grupoB.push(alunos[i])
    } else {
        grupoA.push(alunos[i])
    }
}

//Estacionamento
function calcularNumeroDeEntradas(placa){
   // Seu código vem aqui...
   let n = 0
   for (let i=0; i<placas.length; i++) {
      if (placa == placas[i]) {
         n++
      }
   }
   return n
   console.log(n)
}
 
function calcularValorDevido(placa){
   // Seu código vem aqui...
   let qtd = calcularNumeroDeEntradas(placa)
   if (qtd < 20) {
      return qtd*10
   } else {
      qtd *= 5
      let valorFinal = 20 * 10
      valorFinal += qtd
      return valorFinal - 100
   }
}

/* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. */
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
    'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525'
 ]

//Cinema
// seu código vem aqui!
function calculaGostos(notas) {
    let arr = [0, 0, 0]
    for (let i=0; i<notas.length; i++) {
        if (notas[i] >= 4) {
            arr[2]++
        } else if (notas[i] >= 2) {
            arr[1]++
        } else {
            arr[0]++
        }
    }
    return arr
}

//Personagens
function filme(personagens, filmes, lancamentos, id)
{
  // Escreva abaixo o seu código:
  if (id <= personagens.length) {
    id--
    console.log(id)
    return personagens[id] + ' é um personagem do filme ' + filmes[id] + ' que estreou no cinema em ' + lancamentos[id] + '.'
  } else {
    return 'Essa não é uma opção válida.'
  }
}

//Comissão
function comissao(preco,porcentagem){
  return (preco * porcentagem) / 100
}

//Maior que o número
function maiorQueNum(array, num)
{
  // Escreva abaixo o seu código:
  let novoArr = []
  for (let i=0; i<array.length; i++) {
    if (array[i] > num) {
      novoArr.push(array[i])
    }
  }
  return novoArr
}

//Busca divisível por
function buscarDivisivelPor(array, num)
{
  // Escreva abaixo o seu código:
  for (let i=0; i<array.length; i++) {
    if (array[i] % num === 0 && array[i] != 0) {
      return array[i]
    }
  }
  return 'Nenhum número válido encontrado!'
}

//Repetindo palavras
function repete(valor,qtd){
 //
 for (let i=0; i<qtd; i++) {
     console.log(valor)
 }
}

//Séries
function series(prefixo, array)
{
    // Escreve sua função abaixo:
    let filmes = []
    for (let i=0; i<array.length; i++) {
        filmes.push(prefixo + ' ' + array[i])
    }
    return filmes
}

//Somatórias de baixo valor
function somatoriaBaixoValor(arr) {
    let soma = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0 && arr[i]<= 1000) {
            soma += arr[i]
        }
    }
    return soma
}

//Entrada no cinema
function lugaresDisponiveis(lugarVago, lugarUser) {
    for(let i=0; i<lugarVago.length; i++) {
        if (lugarUser == lugarVago[i]) {
            return 'Parabéns, o assento número ' + lugarUser + ' está disponível.'
        }
    }
    return "Desculpe, o assento número " + lugarUser + " está ocupado, mas ainda há " + lugarVago.length + " assentos disponíveis."
}

//A chave secreta
function aChaveSecreta(arr) {
  let mensagem = []
   for (let i=arr.length-1; i<arr.length && i>=0; i--) {
       if (arr[i] == '*') {
       } else {
         mensagem.push(arr[i])
       }
   }
  return mensagem.join('')
}