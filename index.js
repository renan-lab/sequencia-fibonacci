let valorAtual = 1,
  valorAnterior = 0,
  pertence;
const num = 610;

console.log(valorAnterior);

while (valorAtual < num) {
  let soma = valorAnterior + valorAtual;
  console.log(soma);
  valorAnterior = valorAtual;
  valorAtual = soma;
  soma == num ? (pertence = true) : (pertence = false);
}

pertence
  ? console.log(`${num} pertence à sequência`)
  : console.log(`${num} não pertence à sequência`);