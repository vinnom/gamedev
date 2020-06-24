const cenarioFundoImagemCaminho = "imagens/cenario/floresta_fundo.png";
const cenarioFrenteImagemCaminho = "imagens/cenario/floresta_frente.png";
const protagonistaImagemCaminho = "imagens/personagens/protagonista/correndo.png";
const gotinhaImagemCaminho = "imagens/personagens/inimigos/gotinha.png";
const gameOverCaminho = "imagens/assets/game-over.png";
const trilhaJogoCaminho = "sons/trilha_jogo.mp3";
const somPuloCaminho = "sons/som_pulo.wav";

const velocidadeCenarioFundo = 2;
const velocidadeCenarioFrente = 5;

let cenarioFundoImagem;
let cenarioFrenteImagem;
let protagonistaImagem;
let gotinhaImagem;
let gameOverImagem;

let trilhaJogo;
let somPulo;

let cenarioFundo;
let cenarioFrente;
let protagonista;
let gotinha;

function preload() {
  cenarioFundoImagem = loadImage(cenarioFundoImagemCaminho);
  cenarioFrenteImagem = loadImage(cenarioFrenteImagemCaminho);

  protagonistaImagem = loadImage(protagonistaImagemCaminho);
  gotinhaImagem = loadImage(gotinhaImagemCaminho);

  gameOverImagem = loadImage(gameOverCaminho);

  trilhaJogo = loadSound(trilhaJogoCaminho);
  somPulo = loadSound(somPuloCaminho);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenarioFundo = new Cenario(cenarioFundoImagem, velocidadeCenarioFundo)
  cenarioFrente = new Cenario(cenarioFrenteImagem, velocidadeCenarioFrente);

  const posicaoXProtagonista = 30;
  const posicaoYProtagonista = height - 135;
  const larguraProtagonista = 110;
  const alturaProtagonista = 135;
  const larguraSpriteProtagonista = 220;
  const alturaSpriteProtagonista = 270;

  protagonista = new Protagonista(protagonistaImagem,
    posicaoXProtagonista, posicaoYProtagonista,
    larguraProtagonista, alturaProtagonista,
    larguraSpriteProtagonista, alturaSpriteProtagonista,
    somPulo
  );

  const posicaoXGotinha = width + 100;
  const posicaoYGotinha = height - 52;
  const larguraGotinha = 52;
  const alturaGotinha = 50;
  const larguraSpriteGotinha = 105;
  const alturaSpriteGotinha = 100;

  gotinha = new Gotinha(gotinhaImagem,
    posicaoXGotinha, posicaoYGotinha,
    larguraGotinha, alturaGotinha,
    larguraSpriteGotinha, alturaSpriteGotinha
  );

  frameRate(30);

  trilhaJogo.loop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    protagonista.pule();
  }
}

function draw() {
  cenarioFundo.exiba();
  cenarioFrente.exiba();
  protagonista.exiba();
  gotinha.exiba();
  if (protagonista.estahColidindo(gotinha)) {
    image(gameOverImagem, width * 0.3, height * 0.5);
    trilhaJogo.stop();
    noLoop();
  }
}
