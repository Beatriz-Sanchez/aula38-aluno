var database;
var estadoJogo = 0;
var numJogadores = 0;
var form, jogador, jogo;
var todosJogadores;

function setup() {
  database = firebase.database();
  createCanvas(400,400);
  jogo = new Jogo();
  jogo.getState();
  jogo.start();
}

function draw() {
  //atualizar o estado de jogo para um quando houver 4 jogadores
  if(numJogadores >= 4){
    jogo.update(1);
  }

  //limpa a tela e comaço o jogo se o modo de jogo for 1
  if(estadoJogo === 1){
    clear();
    jogo.jogar();
  }
}