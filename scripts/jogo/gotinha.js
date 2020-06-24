class Gotinha extends Personagem {
  constructor(imagem, posicaoX, posicaoY, largura, altura, spriteTamanhoX, spriteTamanhoY) {
    super(imagem, posicaoX, posicaoY, largura, altura, spriteTamanhoX, spriteTamanhoY);
    this.velocidade = 10;
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
