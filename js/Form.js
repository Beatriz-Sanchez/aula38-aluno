class Form {
  constructor() {
    this.input = createInput("Nome");//viraram propriedades
    this.button = createButton("Jogar");//viraram propriedades
    this.greeting = createElement("h3");//viraram propriedades
  }

  esconder(){
    this.greeting.hide();//adição do this.
    this.input.hide();//adição do this.
    this.button.hide();//adição do this.
  }

  display() {
    var titulo = createElement('h2');
    titulo.html("Jogo de Corrida");
    titulo.position(130, 0);

    //ajeita posição dos elementos html
    this.input.position(130, 160);//adição do this.
    this.button.position(250, 250);//adição do this.

    //quando clicar no botão
    this.button.mousePressed(() => {//novo
      //esconder entrada e botão
      this.input.hide();//adição do this.
      this.button.hide();//adição do this.

      jogador.nome = this.input.value();//adição do this.

      //aumentar o valor do numJogadores e atualizar o nome do jogador no banco de dados
      numJogadores += 1;
      jogador.indice = numJogadores; //novo
      jogador.update();
      jogador.updateCount(numJogadores);

      //mostrar mensagem de boas-vindas
      this.greeting.html("Olá " + jogador.nome);
      this.greeting.position(130, 160);
    });
  }
}