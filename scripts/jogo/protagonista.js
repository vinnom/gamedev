class Protagonista extends Personagem {
  constructor(imagem, posicaoX, posicaoY, largura, altura, spriteTamanhoX, spriteTamanhoY, somPulo) {
    super(imagem, posicaoX, posicaoY, largura, altura, spriteTamanhoX, spriteTamanhoY);
    this.posicaoYInicial = posicaoY;
    this.alturaPulo = 0;
    this.gravidade = 2;
    this.contaPulo = 1;
    this.somPulo = somPulo;
  }

  pule() {
    if (this.contaPulo < 3) {
      this.somPulo.play();
      this.alturaPulo = -30; 
      this.contaPulo++;
    }
  }

  exiba() {
    super.exiba();
    this.acaoGravitacional();
  }

  acaoGravitacional() {
    this.posicaoY += this.alturaPulo;
    this.alturaPulo += this.gravidade;

    if (this.posicaoY > this.posicaoYInicial) {
      this.posicaoY = this.posicaoYInicial;
      this.contaPulo = 1;
    }
  }

  estahColidindo(inimigo){
    const precisao = 0.65;
    return collideRectRect(
      this.posicaoX, this.posicaoY,
      this.largura * precisao, this.altura * precisao,
      inimigo.posicaoX, inimigo.posicaoY,
      inimigo.largura * precisao, inimigo.altura * precisao
    );
  }
}
