
function limpeza(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Pedido número 5, informa boas-vindas junto ao nome do usuário.
let nome = prompt ('Qual o seu nome?');
alert (`Boas-vindas ${nome}!`);

// Pedido número 1, perguntar o dia da semana e gerar uma resposta de acordo com o dia.
alert ('vamos começar com uma pergunta simples');
let perg1 = prompt('Que dia é esse da semana?');

let resp1 = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];
let resp2 = ['sabado', 'domingo'];

if (resp1.includes(limpeza(perg1))) {
    alert ('Boa semana!');
    console.log('Boa semana!', nome);
} else if (resp2.includes(limpeza(perg1))) {
    alert ('Bom fim de semana');
}

// Pedido número 2, checar se um número que o usuário fornecer é positivo ou negativo.
let perg2 = prompt ('qual seu número favorito?');
perg2 = Number(perg2);

if (perg2 > 0) {
    alert (`Você sabia que ${perg2} é um número positivo?`);
    console.log('voce sabia que', perg2, 'é um número positivo?');

} else if (perg2 < 0) {
    alert (`Você sabia que ${perg2} é um número negativo?`);
    console.log('voce sabia que', perg2, 'é um número negativo?');
} else if (perg2 === 0) {
    alert (`Você sabia que ${perg2} é um número neutro?`);
    console.log('voce sabia que', perg2, 'é um número neutro?');

} else {
    alert ('número invalido');
}

// pedido 3, Criar um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre uma mensgaem legal, caso não, mande uma mensagem triste.
let pontuação = 0;

alert ('vamos jogar um quiz sobre harry potter!');

let perg3 = prompt ('Qual o feitiço que o harry mais usava em combate?');
let resp3 = ('expelliarmus');

if (limpeza(perg3) === resp3) {
    alert ('parabéns, você acertou!');
    pontuação = pontuação + 20;
    console.log('voce está com ', pontuação, 'pontos!');


} else {
    alert ('que pena, você errou!');
    pontuação = 0;
}

let perg4 = prompt ('Qual o nome completo do professor de poções?');
let resp4 = ('severo snape');

if (limpeza(perg4) === resp4) {
    alert ('parabéns, você acertou!');
    pontuação = pontuação + 20;
    console.log('voce está com ', pontuação, 'pontos!');
} else {
    alert ('que pena, você errou!');
    pontuação = pontuação - 20;
    console.log('voce está com ', pontuação, 'pontos!');
}

let perg5 = prompt ('Qual o nome completo do diretor de hogwarts?');
let resp5 = ('alvo dumbledore');

if (limpeza(perg5) === resp5) {
    alert ('parabéns, você acertou!');
    pontuação = pontuação + 60;
    console.log('voce está com ', pontuação, 'pontos!');
} else {
    alert ('que pena, você errou!');
    pontuação = pontuação - 40;
    console.log('voce está com ', pontuação, 'pontos!');
}

let perg6 = prompt ('Qual o nome completo do melhor amigo do harry?');
let resp6 = ('ron weasley');

if (limpeza(perg6) === resp6) {
    alert ('parabéns, você acertou!');
    pontuação = pontuação + 20;
    console.log('voce está com ', pontuação, 'pontos!');
}
 else {
    alert ('que pena, você errou!');
    pontuação = pontuação - 100;
    console.log('voce está com ', pontuação, 'pontos!');
}

if (pontuação >= 100) {
    alert('Parabéns voce é um verdadeiro fã de harry potter!');

} else {
    alert ('Como tu conseguiu errar alguma dessas perguntas?');

}
if (pontuação < 0) {
    pontuação = 0;

}

// pedido 4, Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluier o calor do salo.
let saldo = 1000;

alert ('Acabei de hakeiar sua conta, quer saber o saldo?');
alert (`Seu saldo ${nome} é de R$ ${saldo} reais`);














