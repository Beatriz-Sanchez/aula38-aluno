class Jogo {
    constructor() {}
    //pegar estado de jogo
    getState() {
        var estadoJogo = database.ref("estadoJogo");
        estadoJogo.on("value", function (data) {
            estadoJogo = data.val();
        });
    }

    //atualizar estado de jogo
    update(estado) {
        database.ref('/').update({
            estadoJogo: estado
        });
        estadoJogo = estado;
    }
    //iniciar o jogo
    //transformar em função assíncrona e adicionar o ouvinte assíncrono .once() é opcional e evita o bug de clicar muito rápido e ainda não ter buscado o valor de numJogadores
    async start() {
        if (estadoJogo === 0) {
            jogador = new Jogador();
            var refNumJogadores = await database.ref('numJogadores').once("value");
            if (refNumJogadores.exists()){
                numJogadores = refNumJogadores.val();
                jogador.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    //novo
    //estado de jogo jogar
    jogar() {
        form.esconder();
        textSize(30);
        text("Começou o jogo!", 120, 100);
        Jogador.getInfoJogadores();

        if (todosJogadores !== undefined) {
            var mostrarPos = 130;
            
            // deixar o texto do jogador atual vermelho
            for (var jgdr in todosJogadores) {
                if (jgdr === "jogador" + jogador.indice) {
                    fill('red');
                } else {
                    fill('black');
                }

                mostrarPos += 20;
                textSize(15);
                text(todosJogadores[jgdr].nome + ": " + todosJogadores[jgdr].distancia, 120, mostrarPos);
            }
        }

        if (keyDown(UP_ARROW) && jogador.indice !== null) {
            jogador.distancia += 50;
            jogador.update();
        }
    }
}