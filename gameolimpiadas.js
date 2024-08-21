let vida = 0; // VARIAVEL VIDA
let numt = 1; // VARIAVEL PARA AVANCAR A HISTORIA
let numb = 1; // VARIAVEL PARA AVANCAR AS OPCOES
let inventario = ['ALEGRIA']; // VARIAVEL PARA ARMAZENAR O INVENTARIO
function main(){ // FUNCAO PARA O CODIGO COMPLETO
const readlineSync = require('readline-sync'); 

let historiatexto = [
    '',`Voce e Iman Mahdavi, um pequeno atleta que vive em uma cidade devastada pela Guerra, desde pequeno voce treinava luta livre com seu pai, pelo menos era assim ate ele partir.`,
    `Um pouco mais tarde em sua adolescencia voce ainda sofre com a pressao da Guerra, onde sua cidade acaba chegando em uma situacao insustentavel. Sua Mae e Irmazinha estao em situacoes precarias e acabam nao tendo condicoes para se refugiar.`,
    `Apos fugir do Ira, voce acaba se refugiando para a Italia, onde seu unico foco agora e sua paixao pela luta livre, porem em sua academia ja comecaram as piadinhas, um grupo de valentoes ficam rindo de voce durante os treinos.`,
    `Aos 18 voce chega a sua primeira final de uma competicao internacional, voce entra no ringue com o peso de carregar o nome de seu pais.`,
    `Apos o campeonato muitas oportunidades surgiram em sua vida, com isso voce acaba ganhando interesse de outros treinadores e alguns patrocinios`,

    `Voce esta chegando cada vez mais perto de seu sonho, falta exatamente 3 meses para as olimpiadas. Sera que Voce foi Convocado?
    Baseado em sua Jornada: ` //FIM
]; //HISTORIA
let historiaboa = [
    '', '1 - Treinar para esquecer', 
    '1 - Largar sua Familia e Fugir do Pais',
    '1 - Apenas Ignora e deixe com que eles continuem',
    '1 - Vai atras de melhorar no esporte',
    '1 - Se fecha totalmente e foca apenas em seus treinos'
]; //OPCOES BOAS 
let historiaruim = [
    '', '2 - Parar com o Esporte por um tempo.',
    '2 - Passar o pouco tempo restante com eles',
    '2 - Arrebenta a cara deles, assim acabando com as piadinhas.',
    '2 - Tira um tempo do esporte e aproveita sua nova vida',
    '2 - Comemora a chegada de seu sonho e vai pra balada com seus amigos.'
]; //OPCOES RUINS
let textobom = [
    '', 'Voce acaba melhorando muito',
    'Apesar de Doer, isso era o melhor para voce',
    'Seu Treinador fica muito orgulhoso de voce',
    'Voce esta ficando imparavel',
    'Voce tem certeza, sua Hora esta chegando'
]; //TEXTOS PARA AS OPCOES BOAS
let textoruim = [
    '', 'Voce acaba perdendo paixao pela Luta',
    'Ao ficar mais voce acaba passando os momentos mais difcieis com eles, voce nao precisava ver isso',
    'Seu Treinador ve e fica muito decepcionado',
    'Voce é um Atleta, todos se desapontam com voce',
    'A Midia acaba te fotografando, sua imagem piora muito'
]; //TEXTOS PARA AS OPCOES RUINS
function GanharEmocao(){//ADICIONAR EMOCOES AO INVENTARIO DO USER
    if (historiaboa[numb] == historiaboa[2]){
        inventario.push('FOCO')
    }
    if (historiaboa[numb] == historiaboa[4]){
        inventario.push('DISCIPLINA')
    }
    if (historiaboa[numb] == historiaboa[6]){
        inventario.push('EGO')
    }
}
function Alter1() {//LER A RESPOSTA DA ALTERNATIVA QUE O USER ESCOLHEU
    if (historiaboa[numb]) {
        console.log(textobom[numb-1])
    }
}
function Alter2() {//LER A RESPOSTA DA ALTERNATIVA QUE O USER ESCOLHEU
    if (historiaruim[numb]) {
        console.log(textoruim[numb-1])
    }
}
function AvancarHistoria() {//AVANCAR A HISTORIA DO JOGO
    if (numt < historiatexto.length) {
        console.log(`\n${historiatexto[numt]}`);
        numt++;
    }
}
function VoltarHistoria() {//CASO O USER NAO SELECIONE UMA ALTER POSSIVEL, ELE NAO AVANCA A HISTORIA 
    if (numt < historiatexto.length) {
        numt--;
    }
}
function mostrarOpcoes() {//MOSTRAR AS ALTERNATIVAS DE RESPOSTA AO USER
    if (numt < historiatexto.length) {
        if (numb < historiaboa.length) {
            console.log(`\n${historiaboa[numb]}`);
        }
        if (numb < historiaruim.length) {
            console.log(`\n${historiaruim[numb]}`);
        }
    }
}
function verProgresso() { //FUNCAO PARA VER O PROGRESSO DO USER
    console.log(`Seu Progresso Atual: ${numt-1}/5`);
}
function verInventario() { //FUNCAO PARA VER O INVENTARIO DO USER
    console.log(`Seu inventario Possui: ${inventario}`);
}
function deuBom() { //FUNCAO PARA AUMENTAR PONTOS DA VIDA, PARA COMPLETAR O JOGO
    if (numb < historiaboa.length) {
        vida += 20;
        numb++;
    }
}
function passou() {//FUNCAO PARA VER SE O USUARIO GANHOU O JOGO E DAR OPCOES DO QUE FAZER AO ENCERRADO
    if (vida >= 60) {
        console.log(`        Parabens voce alcancou as olimpiadas.
        Seu Score foi: ${vida}
        Voce Desbloqueou: ${inventario}`);
    } else {
        console.log("Que Pena voce Fracassou.");
    }
    let escolha = readlineSync.questionInt(`\nO que voce quer fazer?\n1 - Reiniciar Jogo\n2 - Voltar do 3 Checkpoint\n3 - Fechar Jogo\n`);
    while(true){
        switch (escolha) {
            case 1:
                //REINICIAR O JOGO
                vida = 0;
                numt = 1;
                numb = 1;
                inventario = ['ALEGRIA'];
                main();
                break;
            case 2:
                //CHECKPOINT DO JOGO
                vida = 2;
                numt = 3;
                numb = 3;
                inventario = ['ALEGRIA'];
                main();
                break;
            case 3:
                //ENCERRAR O JOGO
                console.log("Jogo encerrado. Ate a proxima!");
                process.exit();
                break;
            default:
                console.log("Opcao invalida. Selecione uma opcao Possivel.");
                break;
        }
    }
}
while (true) {
    let start = readlineSync.questionInt(` MENU:
        1 - Avancar Historia
        2 - Ver Progresso
        3 - Ver Inventario
        JOGANDO: `);
    switch (start) {
        case 1:
            AvancarHistoria();
            if (numt == historiatexto.length) {
                passou();
            } else {
                mostrarOpcoes();
                let question = readlineSync.questionInt(`\nO que voce Faz?\n`);
                switch (question) {
                    case 1:
                        deuBom();
                        Alter1();
                        GanharEmocao();
                        break;
                    case 2:
                        if (numb < historiaruim.length) {
                            console.log(`\n${historiaruim[numb]}`);
                            numb++;
                        }
                        Alter2();
                        break;
                    default:
                        VoltarHistoria();
                        console.log('Selecione uma alternativa possivel');
                        break;
                }
            }
            break;
        case 2:
            verProgresso();
            break;
        case 3:
            verInventario();
            break;
        default:
            console.log('Selecione uma alternativa possivel');
            numt--
            break;
        }
    }
}
main()//COMECAR JOGO

/*
function VoltarOpcoes(){
    if (numb < historiaboa.length || numb < historiaruim.length){
        numb--;
    }
}
*/