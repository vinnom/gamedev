class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.posicaoX = 0;
    this.posicaoY = height - 135;
    this.largura = 110;
    this.altura = 135;
    this.spriteLinha = 0;
    this.spriteColuna = 0;
    this.spriteTamanhoX = 220;
    this.spriteTamanhoY = 270;
  }

  exiba() {
    image(personagemImagem,
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
