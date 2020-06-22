
let cenarioImagem;
let personagemImagem;

let trilhaJogo;

let cenario;
let personagem;

const velocidadeCenario = 3;

const cenarioImagemCaminho = "imagens/cenario/floresta.png";
const personagemImagemCaminho = "imagens/personagem/correndo.png";
const trilhaJogoCaminho = "sons/trilha_jogo.mp3";

function preload(){
  cenarioImagem = loadImage(cenarioImagemCaminho);
  personagemImagem = loadImage(personagemImagemCaminho);
  trilhaJogo = loadSound(trilhaJogoCaminho);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cenario = new Cenario(cenarioImagem, velocidadeCenario);
  personagem = new Personagem(personagemImagem);

  frameRate(30);

  trilhaJogo.loop();
}

function draw() {
  cenario.exiba();
  personagem.exiba();
}
