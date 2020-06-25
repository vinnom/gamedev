class Protagonista extends Personagem {
  constructor(imagem, posicao, tamanho, tamanhoSprite, somPulo, toque) {
    super(imagem, posicao, tamanho, tamanhoSprite);
    this.posicaoYInicial = posicao.valorY;
    this.velocidadePulo = 0;
    this.gravidade = 2;
    this.contaPulo = 1;
    this.somPulo = somPulo;
    this.precisaoX = toque.precisaoX;
    this.precisaoY = toque.precisaoY;
    this.correcaoX = toque.correcaoX;
    this.correcaoY = toque.correcaoY;
  }

  pule() {
    if (this.contaPulo < 3) {
      this.somPulo.play();
      this.velocidadePulo = -30;
      this.contaPulo++;
    }
  }

  exiba() {
    super.exiba();
    this.acaoGravitacional();
  }

  acaoGravitacional() {
    this.posicaoY += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if (this.posicaoY > this.posicaoYInicial) {
      this.posicaoY = this.posicaoYInicial;
      this.contaPulo = 1;
    }
  }

  estahColidindo(inimigo) {
    // noFill();
    // rect(this.posicaoX + this.correcaoX, this.posicaoY, this.largura * this.precisaoX, this.altura * this.precisaoY);
    // rect(
    //   inimigo.posicaoX + inimigo.correcaoX,
    //   inimigo.posicaoY + inimigo.correcaoY,
    //   inimigo.largura * inimigo.precisaoX,
    //   inimigo.altura * inimigo.precisaoY
    // );

    return collideRectRect(
      this.posicaoX + this.correcaoX,
      this.posicaoY + this.correcaoY,
      this.largura * this.precisaoX,
      this.altura * this.precisaoY,
      inimigo.posicaoX + inimigo.correcaoX,
      inimigo.posicaoY + inimigo.correcaoY,
      inimigo.largura * inimigo.precisaoX,
      inimigo.altura * inimigo.precisaoY
    );
  }
}
