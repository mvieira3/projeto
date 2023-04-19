//Como pusemos o script na head, temos de garantir que o JavaScript só é lido após o carregamento total do DOM
document.addEventListener('DOMContentLoaded', () => {

    //Quando pomos um 0 antes de um inteiro em JS, ele assume que é octal (seja lá o que isso for) console.log(018 - 015); Como 018 não é um octal válido, assume que é 18 e converte o octal 015 para inteiro 13 --> 18 - 13 = 5

    //![] é falso (Boolean); [] é falso também mas avalia para 0 (number)

    String.raw(''); //interpreta exatamente como escrevemos a string
    console.log(String.raw('N\naW'));
    console.log(typeof(NaN)); //number
    console.log("Hello" instanceof String);
    
    
});


//Apontamentos Aula
//wtfjs.com --> um apanhado de todas as retardadices de JavaScript
//xss payloads

//O JS faz o cast para os data types que lhe dá mais jeito

//A PASSWORD NÃO PODE ESTAR EM PLAIN TEXT NA BASE DE DADOS
//Recebemos a password em clear text e depois passamos à função hash('sha256', string password) para fazer a encriptação da password
//somar um "magic number" (salt) à password. Gerar um número diferente para cada utilizador (calculado do lado do servidor), preferencialmente, mas, na pior das hipóteses, só um único já adiciona uma camada extra de proteção

//hacker1 site
//css cool titles