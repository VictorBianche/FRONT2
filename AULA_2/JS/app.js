//[1] Pedra - [2] Papel - [3] Tesoura

let jogadores = [
    {nome:'usuario',
    pontos:0,
    placarFinal:0
    },
    {nome:'Bot',
    pontos:0,
    placarFinal:0
    }
]

function start(){
    if(jogadores[0].pontos <= 3 || jogadores[1].pontos <= 3){ // valida o ponto dos jogadores
        let escolhaUsuario = parseInt(prompt('[1] Pedra - [2] Papel - [3] Tesoura')); // Registra mão do Jogador
        let escolhaScript = Math.floor(Math.random() * 3) + 1; // Gera mão do bot
        jogar(escolhaUsuario,escolhaScript) //invoca a função do jogo
    }else if(confirm("Continuar Jogando?")){
        jogadores[0].pontos = 0; //Zera os pontos do Jogador
        jogadores[1].pontos = 0; //Zera os pontos do Bot
        start()
    }
}

function jogar(escolhaUsuario,escolhaScript){
    if(escolhaScript == 1 && escolhaUsuario == 3 ||escolhaScript == 3 && escolhaUsuario == 2||escolhaScript == 2 && escolhaUsuario == 1){ //Opções validas para vitoria do Bot
            alert('Vitoria do Bot')
            jogadores[1].pontos++
        }else if(escolhaScript == escolhaUsuario){ //Opções de Empate
            alert("Empate")
        }else if(escolhaUsuario < 1 || escolhaUsuario > 3){ // Validação de dados errados
            alert("Dado invalido")       
         }else{ //Opções de Vitoria do Jogador
            alert(`Você Ganhou`)
            jogadores[0].pontos++
        }
    console.log("Mão Jogador: " + escolhaUsuario)
    console.log("Mão Bot: " + escolhaScript)
    start()   
};

start()