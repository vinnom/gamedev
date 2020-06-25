class Personagem {
  constructor(imagem, posicao, tamanho, tamanhoSprite) {
    this.imagem = imagem;
    this.posicaoX = posicao.valorX;
    this.posicaoY = posicao.valorY;
    this.largura = tamanho.valorX;
    this.altura = tamanho.valorY;
    this.spriteTamanhoX = tamanhoSprite.valorX;
    this.spriteTamanhoY = tamanhoSprite.valorY;
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
