//criar uma calculadora para terminal

import Scanner from "@codeea/scanner";


// operações básicas
// soma, subtração, divisão e multiplicação


//criar uma função

async function main() {

  // chamdas de operação
  // 0 - sair
  // 1 - soma
  // 2 - subtração
  // 3 - divisão
  // 4 - multiplicação
  const scanner = new Scanner(); 5
  var menu = `Escolha uma das operações para calcular
              0 - Sair
              1 - Somar
              2 - Subtrair
              3 - Dividir
              4 - Multiplicar
              5 - Resto
              6 - Expônenciação
              7 - É par ou impar`;

  console.log(menu)
  let operacao = 0;
  do {
    operacao = parseInt(await scanner.question("INforme a operação "))
    if (operacao === 1) {
      console.log("somando......")
      const a = await scanner.questionFloat("Informe o primeiro NUmero ");
      const b = await scanner.questionFloat("informe o segundo numero ");
      const resultado = a + b;
      console.log(`A soma de  ${a} + ${b} é igual a ${resultado}`)

    } else if (operacao === 2) {
      console.log("subtraindo")
      const a = await scanner.questionFloat("Informe o primeiro NUmero ");
      const b = await scanner.questionFloat("informe o segundo numero ");
      const resultado = a - b;
      console.log(`A subtração de  ${a} - ${b} é igual a ${resultado}`)


    } else if (operacao === 3) {
      console.log("dividindo")
      const a = await scanner.questionFloat("Informe o primeiro NUmero ");
      const b = await scanner.questionFloat("informe o segundo numero ");
      const resultado = a / b;
      console.log(`A divisao de  ${a} / ${b} é igual a ${resultado}`)

    } else if (operacao === 4) {
      console.log("multiplicando")
      const a = await scanner.questionFloat("Informe o primeiro NUmero ");
      const b = await scanner.questionFloat("informe o segundo numero ");
      const resultado = a * b;
      console.log(`A multiplicação de  ${a} *4 ${b} é igual a ${resultado}`)

    } else if (operacao === 5) {
      console.log("Resto")
      const a = await scanner.questionFloat("Informe o primeiro NUmero ");
      const b = await scanner.questionFloat("informe o segundo numero ");
      const resultado = a % b;
      console.log(`O Resto de  ${a} % ${b} é igual a ${resultado}`)

    } else if (operacao === 6) {
      const base = await scanner.questionFloat("INforme a base:");
      const expoente = await scanner.questionFloat("informe o expoente");
      let resultado = 1;
      for (let i = 1; i <= expoente; i++) {
        resultado = resultado * base;
      }
      console.log(`A expônenciação de ${base} elevado a ${expoente} é ${resultado}`)

    } else if (operacao === 7) {
      const numero = await scanner.questionFloat("informe um Numero")
      let par = numero % 2 === 0 ? "é par" : "é ímpar";
      console.log(`O numero ${par}`)
    } else {

      console.log("operação inválida escolha operações de 1 a 4")
    }
  } while (operacao !== 0)
  scanner.close();
  console.log("Opção 0 escolhida- Programa encerrado")

  //soma
  //subtração
  //divisão
  //multiplcacao


}
main()
