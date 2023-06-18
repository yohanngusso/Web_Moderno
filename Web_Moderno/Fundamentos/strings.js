// string é um grupo de caracteres que começa em 0,1,2,3,4 em suas posições 
const escola = "Cod3r" 
const escola2 = "escola"

// C(0) o(1) d(2) 3(3) r(4)

console.log(escola.charAt(4)) //charAt retorna o caracter na posição que vc colocar
console.log(escola.charAt(5)) // não vai retornar nada pois nessa constante escola não possui uma posição 5
console.log(escola2.charAt(0))
console.log(escola.charCodeAt(0)) // vai retornar o Unicode
// (basicamente é código dado para cada caracter que o computador entende) do caracter que vc colocar, 
// também é representado por binario, hexadimal e decimal que seria o Unicode -> 0x0043
console.log(escola.indexOf('3')); // retorna o caracter que buscar encontrar na string ou array, de esquerda para direita 
// ainda sobre indexof -> retornar o índice da primeira ocorrência de um determinado valor em uma string ou array.
console.log(escola.substring(1)) // retonra uma parte da string a partir da posição que você colocar
console.log(escola.substring(0,3)) // nesse caso desde a posição 0 até a posição 3 porém não inclui o caracter do final
