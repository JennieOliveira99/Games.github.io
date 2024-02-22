const geto = document.querySelector(".geto");
const gojo = document.querySelector(".gojo");
const backgroundMusic = new Audio("sound.mp3");
const collisionAudio = new Audio("gojo.mp3");
let gameOver = false;

// Verifica se a música está tocando
let isMusicPlaying = false;

// Função para fazer o personagem pular
const jump = () => {
  if (!gameOver) {
    geto.classList.add("jump");

    // Inicia a música se ainda não estiver tocando
    if (!isMusicPlaying) {
      backgroundMusic.play();
      isMusicPlaying = true;
    }

    setTimeout(() => {
      geto.classList.remove("jump");
    }, 500);
  }
};

// Função de fim de jogo
const endGame = () => {
  gameOver = true;

  const gameOverButton = document.createElement("button");
  gameOverButton.textContent = "Game Over! Recomece!";
  gameOverButton.addEventListener("click", () => {
    window.location.href = "start.html";
  });

  document.body.appendChild(gameOverButton);

  // Pausa a música quando o jogo termina
  backgroundMusic.pause();
  isMusicPlaying = false;

  clearInterval(gameLoop);
};

// Função para reproduzir o áudio de colisão
const playCollisionAudio = () => {
  collisionAudio.play();
};

// Loop para verificar se o jogador perdeu ou não
  const gameLoop = setInterval(() => {
  const gojoPosition = gojo.offsetLeft;
  const getoPosition = +window
    .getComputedStyle(geto)
    .bottom.replace("px", "");

  if (gojoPosition <= 120 && gojoPosition > 0 && getoPosition < 80) {
    gojo.style.animation = "none";
    gojo.style.left = `${gojoPosition}px`;

    geto.style.animation = "none";
    geto.style.bottom = `${getoPosition}px`;

    geto.src = "./img/game-over.png";
    geto.style.width = "200px";
    geto.style.marginLeft = "30px";

    playCollisionAudio();
    endGame();
  }
}, 10);

// Quando pressionar uma tecla do teclado, o Geto vai pular
document.addEventListener("keydown", jump);

// Inicia a música de fundo ao carregar a página
backgroundMusic.play();
