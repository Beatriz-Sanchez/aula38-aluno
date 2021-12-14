class Jogador {
  constructor() {
    this.indice = null;
    this.distancia = 0;
    this.nome = null;
  }
  getCount() {
    //pegar informação do numero de jogadores
    var refNumJogadores = database.ref('numJogadores');
    refNumJogadores.on("value", function (data) {
      numJogadores = data.val();
    });
  }
  //atualizar o numero de jogadores
  updateCount(num) {
    database.ref('/').update({
      numJogadores: num
    });
  }
  //atualizar nome do jogador
  update() {
    var indiceJogador = 'jogadores/jogador' + this.indice; //mudar aqui para a propriedade índice
    database.ref(indiceJogador).set({
      nome: this.nome,
      distancia: this.distancia
    });
  }
  static getInfoJogadores() { //novo. Pega informação de todos os jogadores
    var infoJogadoresRef = database.ref('jogadores');
    infoJogadoresRef.on("value", function (data) {
      todosJogadores = data.val();
    });
  }
}