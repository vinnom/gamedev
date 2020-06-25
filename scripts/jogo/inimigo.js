class Inimigo extends Personagem {
  constructor(imagem, posicao, tamanho, tamanhoSprite, velocidade, toque) {
    super(imagem, posicao, tamanho, tamanhoSprite);
    this.velocidade = velocidade;
    this.precisaoX = toque.precisaoX;
    this.precisaoY = toque.precisaoY;
    this.correcaoX = toque.correcaoX;
    this.correcaoY = toque.correcaoY;
  }

  exiba() {
    super.exiba();
    this.mova();
  }

  mova() {
    this.posicaoX -= this.velocidade;
    this.posicaoX = this.encaixe(this.posicaoX);
  }

  encaixe(posicao) {
    if (posicao < -this.imagem.width) {
      return width;
    }
    return posicao;
  }
}
