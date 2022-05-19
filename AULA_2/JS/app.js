//[1] Pedra - [2] Papel - [3] Tesoura

let jogadores = [
    {nome:'usuario',
    pontos:0,
    placarFinal:0
    },
    {nome:'Maquina',
    pontos:0,
    placarFinal:0
    }
]

function jogar(escolhaUsuario,escolhaScript){
    if(escolhaScript == 1 && escolhaUsuario == 3 ||escolhaScript == 3 && escolhaUsuario == 2||escolhaScript == 2 && escolhaUsuario == 1){
            alert('Vitoria do Bot')
            jogadores[1].pontos++
        }else if(escolhaScript == escolhaUsuario){
            alert("Empate")
        }else if(escolhaUsuario < 1 || escolhaUsuario > 3){
            alert("Dado invalido")       
         }else{
            alert(`Você Ganhou`)
            jogadores[0].pontos++
        }
    console.log("Mão Jogador: " + escolhaUsuario)
    console.log("Mão bot: " + escolhaScript)
};

while(jogadores[0].pontos < 3||jogadores[1].pontos < 3){       
    let escolhaUsuario = parseInt(prompt('[1] Pedra - [2] Papel - [3] Tesoura'));
    let escolhaScript = Math.floor(Math.random() * 3) + 1;
    jogar(escolhaUsuario,escolhaScript)
    
    console.log("Placar Jogador: " + jogadores[0].pontos)
    console.log("Placar Bot: " + jogadores[1].pontos)
}

