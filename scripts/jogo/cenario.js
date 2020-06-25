class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.posicaoX1 = 0;
    this.posicaoX2 = imagem.width;
    this.posicaoY = 0;
  }

  exiba() {
    image(this.imagem, this.posicaoX1, this.posicaoY, this.imagem.width, height);
    image(this.imagem, this.posicaoX2, this.posicaoY, this.imagem.width, height);
    this.mova();
  }

  mova() {
    this.posicaoX1 -= this.velocidade;
    this.posicaoX2 -= this.velocidade;

    this.posicaoX1 = this.encaixe(this.posicaoX1);
    this.posicaoX2 = this.encaixe(this.posicaoX2);
  }

  encaixe(posicaoX) {
    if (posicaoX < -this.imagem.width) {
      return this.imagem.width - 5;
    }
    return posicaoX;
  }
}
