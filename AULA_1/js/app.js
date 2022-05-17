let numeros = [1,2,4,8];
let numero_atual = '';


for (numero of numeros){ 
   numero_atual = parseInt(numero_atual + numero) 
   console.log('Numero Resultante: ' + numero_atual);
}