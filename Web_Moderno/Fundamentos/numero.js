const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1)); // descobrindo se o valor é inteiro,com ponto flutuante em 1.0 é true é inteiro, se for 1.1 é falso então é real(quebrado)
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(4));
console.log(media.toString());
//console.log(media.toString(2)); retorna o valor em binário 