//declaração
let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

//console.log(a);
//console.log(b);

// Vamos usar uma váriavel aux

// declarando e atribuindo
let aux = a; // aux recebe o valor 7
a = b; // a recebe o valor 94
b = aux // b recebe o valor 7
console.log(a)
console.log(b)

// outra forma mais facil em fazer em javascript 

//[a,b] = [b,a]