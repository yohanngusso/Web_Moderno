let preco = 19.90;
let desconto = 0.40;
let precoComDesconto = preco * (1 - desconto);

console.log(19.90 * 0.60); // literal
console.log(precoComDesconto) // com variavel

let nome = "Caderno"; //String (Texto)  -> sequencia de símbolos
let categoria = "Papelaria";
console.log(nome + categoria);
console.log(nome + " " + categoria);
console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: "+ desconto
    + ", Valor com desconto: " + precoComDesconto);
