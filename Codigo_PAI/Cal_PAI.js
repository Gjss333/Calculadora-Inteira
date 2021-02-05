/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Gleydson José dos Santos Silva
 * Curso: IPI
 * Primeira Avalição Individual
 * Questão: 1
 *
 */


// mini-calculadora (soma e subtração)

// este exemplo requer a instalação da biblioteca readline-sync
// comando para instalação: npm install readline-sync
// mais detalhes em https://www.npmjs.com/package/readline-sync

var readlineSync = require ('readline-sync')


function somar (a, b) {
	
    return a + b
}


function subtrair (a, b) {

    return a - b
}

function multiplicar (a, b) {

	var resultado = 0

		for (var i = 1 ; i <= a ; i++){

			resultado += b

		}

		return resultado

}

function divisao (a, b) {

	var divisor = 1

		for(var divisor = 1; divisor <= a ; divisor++) {

			if (divisor * b == a) {

				return divisor

			}
		
		}

}

function restodedivisao (a, b) {

	for (var i = 0; b <= a ; i++) {

		a -= b
		
	}

	return a
}

function Sobre (a) {

    var descricao = console.log ("\n\t Aluno: Gleydson José dos Santos Silva \n\t Idade: 22 \n\t linkedin: gleydson-jose333")
	
	return descricao
	
}



do {

    var operacao = parseInt(readlineSync.question("Digite a operacao \n\t(1) soma\n\t(2) subtracao \n\t(3) multiplicacao \n\t(4) divisao \n\t(5) resto de divisao \n\t(6) sobre \n\t(7)sair \n\t"))
    
    console.log(operacao)

   
 
    if (operacao >= parseInt("1") && operacao <= parseInt("5") ) {



		
        var operando1 = parseInt(readlineSync.question("Digite o primeiro operando "))
        var operando2 = parseInt(readlineSync.question("Digite o segundo operando "))

		var resultado


		
		switch (operacao) {
			case 1:
				resultado = somar (operando1, operando2)
				break

			case 2:
				resultado = subtrair (operando1, operando2)
				break

			case 3:
				resultado = multiplicar (operando1, operando2)
				break

			case 4:
				resultado = divisao (operando1, operando2)
				break

			case 5:
				resultado = restodedivisao (operando1, operando2)
				break
		}

		console.log ("Resultado: ", resultado)
	} 

	//Observação: so consegui chamr a função sobre criando um else if.
	//porque quando chama ela dentro do "if (linha 95)" encontrava bugs

	else if (operacao == parseInt ("6")){

		Sobre ()

	}

	if (operacao == parseInt ("7")) {

		var texto = console.log("\nSaindo...\n\nObrigado Por usar a calculadora")

		return texto

	}

	
} while (operacao != "7")