class Forca {
  //Variaveis de controle e para a lógica
  letrasChutadas = [];
  palavraChutada = [];
  vidas = 6;
  contadorDeChutes = 0;
  palavra;
  possivelPalavra = '';

  constructor(palavra) {//Construtor para atribuir a palavra secreta ao objeto 
    var i;
    this.palavra = palavra;
    for (i = 0; i <= palavra.length - 1; i++) {
      this.palavraChutada[i] = "_";//Atribui campos vazios para possíveis chutes
    }
  }

  chutar(chute) {
    var i;
    var cont = 0;
    if (chute.length > 1) {//Verifica se o tamanho do chute for maior que uma letra ex: "a|e|i"
      return;
    }
    for (i = 0; i < this.letrasChutadas.length; i++) {//Verifica se ja teve alguma ocorrencia do chute
      if (this.letrasChutadas[i] == chute) {
        return;
      }
    }
    this.letrasChutadas[this.contadorDeChutes] = chute;//Caso esteja tudo certo, inclui nas letras chutadas
    this.contadorDeChutes++;//Acrescenta um no contador de chutes

    for (this.i = 0; this.i <= this.palavra.length; this.i++) {//Procura a letra chutada na palavra secreta
      if (chute == this.palavra[this.i]) {
        this.palavraChutada[this.i] = chute;
        cont++;//Verificador para ver se há ocorrencia de determinada letra na palavra secreta
      }
    }
    if (cont == 0) {//Se o contador for igual a 0, significa que não possui tal letra na palavra secreta
      this.vidas--;
    }

  }

  buscarEstado() {// Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    this.possivelPalavra = '';//Variavel auxiliar para veririficar se a palavra obtida é a secreta
    var i;
    for (i = 0; i < this.palavraChutada.length; i++) {//Atribui as letras corretamente chutadas a auxiliar
      this.possivelPalavra += this.palavraChutada[i];
    }
    if (this.vidas == 0) {//Se vidas forem iguais a 0 significa que o jogador perdeu
      return "perdeu";
    } 
    else if (this.possivelPalavra == this.palavra) {//Se possivel palavra for igual a palavra secreta jogador ganhou
      return "ganhou";
    }
    else {//Continua o jogo
      return "aguardando chute";
    }
  }
  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavraChutada// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
