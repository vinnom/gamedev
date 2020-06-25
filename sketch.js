const caminho = {
  fundo: "imagens/cenario/floresta_fundo.png",
  meio: "imagens/cenario/floresta_meio.png",
  frente: "imagens/cenario/floresta_frente.png",
  protagonista: "imagens/personagens/protagonista/correndo.png",
  gotinha: "imagens/personagens/inimigos/gotinha.png",
  gotinhaVoadora: "imagens/personagens/inimigos/gotinha-voadora-teste.png",
  troll: "imagens/personagens/inimigos/troll-teste.png",
  trilha: "sons/trilha_jogo.mp3",
  pulo: "sons/som_pulo.wav",
  somGameOver: "sons/som_gameOver.wav",
  imagemGameOver: "imagens/assets/game-over.png",
  reiniciar: "imagens/assets/reiniciar.png",
};
const velocidade = {
  fundo: 1,
  meio: 2,
  frente: 3,
  gotinha: 8,
  gotinhaVoadora: 6,
  troll: 5,
};
const imagem = {
  cenarioFundo: undefined,
  cenarioMeio: undefined,
  cenarioFrente: undefined,
  protagonista: undefined,
  gotinha: undefined,
  gotinhaVoadora: undefined,
  troll: undefined,
  gameOver: undefined,
};
const som = {
  trilha: undefined,
  pulo: undefined,
  gameOver: undefined,
};
const cenario = {
  fundo: undefined,
  meio: undefined,
  frente: undefined,
};
const personagem = {
  protagonista: undefined,
  gotinha: undefined,
  gotinhaVoadora: undefined,
  troll: undefined,
};
const posicao = {
  protagonista: undefined,
  gotinha: undefined,
  gotinhaVoadora: undefined,
  troll: undefined,
};
const tamanho = {
  protagonista: undefined,
  gotinha: undefined,
  gotinhaVoadora: undefined,
  troll: undefined,
};
const tamanhoSprite = {
  protagonista: undefined,
  gotinha: undefined,
  gotinhaVoadora: undefined,
  troll: undefined,
};
const toque = {
  protagonista: undefined,
  gotinha: undefined,
  gotinhaVoadora: undefined,
  troll: undefined,
};

let pontuacao;
let botaoReiniciar;

const inimigos = [];

const variacaoY = 60;

function preload() {
  imagem.cenarioFundo = loadImage(caminho.fundo);
  imagem.cenarioMeio = loadImage(caminho.meio);
  imagem.cenarioFrente = loadImage(caminho.frente);

  imagem.protagonista = loadImage(caminho.protagonista);
  imagem.gotinha = loadImage(caminho.gotinha);
  imagem.gotinhaVoadora = loadImage(caminho.gotinhaVoadora);
  imagem.troll = loadImage(caminho.troll);

  imagem.gameOver = loadImage(caminho.imagemGameOver);
  console.log(imagem);

  som.trilha = loadSound(caminho.trilha);
  som.pulo = loadSound(caminho.pulo);
  som.gameOver = loadSound(caminho.somGameOver);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  inicie();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    personagem.protagonista.pule();
  }
}

function draw() {
  cenario.fundo.exiba();
  cenario.meio.exiba();
  cenario.frente.exiba();

  personagem.protagonista.exiba();
  personagem.gotinha.exiba();
  personagem.gotinhaVoadora.exiba();
  personagem.troll.exiba();

  pontuacao.exiba();

  inimigos.forEach((inimigo) => {
    if (personagem.protagonista.estahColidindo(inimigo)) {
      image(imagem.gameOver, width * 0.5 - 206, height * 0.3);
      som.trilha.stop();
      som.gameOver.play();
      botaoReiniciar = createImg(caminho.reiniciar, "Reiniciar");
      botaoReiniciar.size(80, 80);
      botaoReiniciar.position(width * 0.5 - 50, height * 0.3 + 100);
      botaoReiniciar.mousePressed(reinicie);
      noLoop();
    }
    pontuacao.pontua(inimigo);
  });
}

function reinicie() {
  botaoReiniciar.remove();
  inicie();
  redraw();
  loop();
}

function inicie() {
  instanciaCenarios();
  instanciaCoordenadasProtagonista();
  instanciaCoordenadasInimigos();

  instanciaProtagonista();
  instanciaInimigos();

  pontuacao = new Pontuacao();
  inimigos.length = 0;
  Array.prototype.push.apply(inimigos, [personagem.gotinha, personagem.gotinhaVoadora, personagem.troll]);
  console.log(inimigos);
  som.trilha.loop();
}

function instanciaInimigos() {
  personagem.gotinha = new Inimigo(
    imagem.gotinha,
    posicao.gotinha,
    tamanho.gotinha,
    tamanhoSprite.gotinha,
    velocidade.gotinha,
    toque.gotinha
  );
  personagem.gotinhaVoadora = new Inimigo(
    imagem.gotinhaVoadora,
    posicao.gotinhaVoadora,
    tamanho.gotinhaVoadora,
    tamanhoSprite.gotinhaVoadora,
    velocidade.gotinhaVoadora,
    toque.gotinhaVoadora
  );
  personagem.troll = new Inimigo(
    imagem.troll,
    posicao.troll,
    tamanho.troll,
    tamanhoSprite.troll,
    velocidade.troll,
    toque.troll
  );
}

function instanciaProtagonista() {
  personagem.protagonista = new Protagonista(
    imagem.protagonista,
    posicao.protagonista,
    tamanho.protagonista,
    tamanhoSprite.protagonista,
    som.pulo,
    toque.protagonista
  );
}

function instanciaCoordenadasInimigos() {
  posicao.gotinha = new Coordenadas(width + 73, height - 50 - variacaoY);
  tamanho.gotinha = new Coordenadas(52, 50);
  tamanhoSprite.gotinha = new Coordenadas(105, 100);
  toque.gotinha = new Toque(0.65, 0.65, 15, 15);

  posicao.gotinhaVoadora = new Coordenadas(width + 547, 400);
  tamanho.gotinhaVoadora = new Coordenadas(100, 75);
  tamanhoSprite.gotinhaVoadora = new Coordenadas(200, 150);
  toque.gotinhaVoadora = new Toque(0.55, 0.55, 25, 20);

  posicao.troll = new Coordenadas(width + 937, height - 170 - variacaoY);
  tamanho.troll = new Coordenadas(180, 180);
  tamanhoSprite.troll = new Coordenadas(400, 400);
  toque.troll = new Toque(0.6, 0.6, 40, 40);
}

function instanciaCoordenadasProtagonista() {
  posicao.protagonista = new Coordenadas(30, height - 135 - variacaoY);
  tamanho.protagonista = new Coordenadas(110, 135);
  tamanhoSprite.protagonista = new Coordenadas(220, 270);
  toque.protagonista = new Toque(0.65, 0.7, 15, 15);
}

function instanciaCenarios() {
  cenario.fundo = new Cenario(imagem.cenarioFundo, velocidade.fundo);
  cenario.meio = new Cenario(imagem.cenarioMeio, velocidade.meio);
  cenario.frente = new Cenario(imagem.cenarioFrente, velocidade.frente);
}
