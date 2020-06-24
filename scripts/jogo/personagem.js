class Personagem {
  constructor(imagem, posicaoX, posicaoY, largura, altura, spriteTamanhoX, spriteTamanhoY) {
    this.imagem = imagem;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
    this.largura = largura;
    this.altura = altura;
    this.spriteTamanhoX = spriteTamanhoX;
    this.spriteTamanhoY = spriteTamanhoY;
    this.spriteLinha = 0;
    this.spriteColuna = 0;
  }

  exiba() {
    image(this.imagem,
      this.posicaoX, this.posicaoY,
      this.largura, this.altura,
      this.spriteColuna, this.spriteLinha,
      this.spriteTamanhoX, this.spriteTamanhoY
    );
    this.anime();
  }

  anime() {
    this.spriteColuna += this.spriteTamanhoX;
    if (this.spriteColuna == this.imagem.width) {
      this.spriteColuna = 0;
      this.spriteLinha += this.spriteTamanhoY;
      if (this.spriteLinha == this.imagem.height) {
        this.spriteLinha = 0;
      }
    }
  }
}
