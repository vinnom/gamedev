class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.posicaoX1 = 0;
    this.posicaoX2 = width;
    this.posicaoY = 0;
  }

  exiba() {
    image(this.imagem, this.posicaoX1, this.posicaoY, width, height);
    image(this.imagem, this.posicaoX2, this.posicaoY, width, height);
    this.mova();
  }

  mova() {
    this.posicaoX1 -= this.velocidade;
    this.posicaoX2 -= this.velocidade;

    this.posicaoX1 = this.encaixe(this.posicaoX1);
    this.posicaoX2 = this.encaixe(this.posicaoX2);
  }

  encaixe(posicaoX) {
    if (posicaoX < -width) {
      return width;
    }
    return posicaoX;
  }
}
