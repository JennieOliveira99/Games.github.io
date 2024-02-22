//criando variaveis

//variavel com $, o elemento ja esta criado no html
     const $startGameButton = document.querySelector(".start-quiz")

     const $nextQuestionButton = document.querySelector(".next-question")

 //removendo a classe hide da div do html 1
    const $questionsContainer = document.querySelector(".questions-container")
//removendo os filhos que a div answers container tem 1
    const $answersContainer = document.querySelector(".answers-container")

    const $questionText = document.querySelector(".question")

    const $answers = document.querySelectorAll(".answer")

//addEventListener capturando o evento de click e rodando a funcao startGame

$startGameButton.addEventListener ("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

//criando variavel auxiliar para saber qual a pergunta atual que esta começando na 0, conforme o usuario vai respondendo, vai aumentando
let currentQuestionIndex = 0
//variavel para calcular quantas questoes corretas
let totalCorrect = 0






    
    
function startGame(){
    //fazendo o botao de comecar jogo desaparecer usando hide
    $startGameButton.classList.add("hide")

    //removendo a classe hide da div do html 2
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()

}

//removendo os filhos que a div answers container tem 2
//while pega o elemento $answersContainer e verifica se ele tem filho, se tiver, remove usando a funcao remove child e checa dnv e assim ate nao houver nenhum filho
 
function displayNextQuestion (){
    resetState()

//verificando se esta na ultima pergunta, se for, nao executa a funcao next question   
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }



//acessando a variavel question e o index atual que é o 0,mostrando em tela a primeira pergunta do banco de pergunta    
//fazendo as perguntas da questions aparecer
     //criando elemento button para cada resposta
     $questionText.textContent = questions[currentQuestionIndex].question
     questions[currentQuestionIndex].answers.forEach(answer => {
       const newAnswer = document.createElement("button")
       newAnswer.classList.add("button", "answer")
       newAnswer.textContent = answer.text
       if (answer.correct) {
        //adcionando informação de que essa resposta e correta, adcionando uma variavel com um valor no elemento html para acessar esse elemento depois dataset.nome
        newAnswer.dataset.correct = answer.correct
        //lê-se correct é igual a true
    }

    $answersContainer.appendChild(newAnswer)
//funcionalidade de click em cada botao
    newAnswer.addEventListener("click", selectAnswer)
//criando a funcao select answer, detectando qual botao o usuario clicou
  

})
}


function resetState() {
    while($answersContainer.firstChild) {
      $answersContainer.removeChild($answersContainer.firstChild)
    }
  
    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
  }
  
//deixando o background vermelho ou verde de acordo se o usuario acertou ou nao a resposta

function selectAnswer(event) {
    const answerClicked = event.target
  
    if (answerClicked.dataset.correct) {
      document.body.classList.add("correct")
      //incrementando resposta correta
      totalCorrect++
    } else {
      document.body.classList.add("incorrect") 
    }
  
    //analisando se o botao tem o atributo correto, o botao vai adcionar a cor do background, ou seja, verde e vice versa
    document.querySelectorAll(".answer").forEach(button => {
      if (button.dataset.correct) {
        button.classList.add("correct")
      } else {
        button.classList.add("incorrect")
      }
      button.disable = true
    })

    //fazendo botao de proxima pergunta aparecer
    $nextQuestionButton.classList.remove("hide")

    //incrementando respostas para acessar proximas perguntas
    currentQuestionIndex ++
    
  }
    

  function finishGame() {
    const totalQuestions = questions.length

    //calculo de quantas o usuario acertou, transformando em porcentagem, arredondando para nao dar numero quebrado
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)
    
    let message = ""


  //criando condicoes
    switch (true) {
      case (performance >= 90):
        message = ":Excelente )"
        break
      case (performance >= 70):
        message = "Muito bom :)"
        break
      case (performance >= 50):
        message = "Bom"
        break
      default:
        message = "Pode melhorar :("
    }


    $questionsContainer.innerHTML = 
    `
      <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Resultado: ${message}</span>
      </p>

      
      <button 
        onclick=window.location.reload() 
        class="button"
      >
        Refazer teste
      </button>
    `
  }

  

//banco de perguntas
//cada posicao do array é um objeto com pergunta co suas possiveis respostas
//propriedade correct, se for falso e a resposta errada

const questions = [
    {
      question: "Quem foi a pessoa responsável por criar a linguagem  FLOW-MATIC que serviu de base para a criação da linguagem COBOL?",
      answers: [
        { text: "Bob Bemer", correct: false },
        { text: "Mary Kenneth Keller", correct: false },
        { text: "Grace Hopper", correct: true },
        { text: "Tim Berners-Lee", correct: false }
      ]
    },
    {
      question: "Quem foi responsável por desenvolver o primeiro algoritmo interpretado por uma máquina, sendo assim, o primeiro programador da história?",
      answers: [
        { text: "Ada Lovelace", correct: true },
        { text: "James Gosling", correct: false },
        { text: "Richard Stallman", correct: false },
        { text: "Alan Turing", correct: false }
      ]
    },
    {
      question: ' Quem foi responsável por calcular a trajetória de voo para a missão de primeiro pouso na lua, feito pelo Apolo 11?',
      answers: [
        { text: 'Katherine Johnson', correct: true },
        { text: 'Hedy Lamarr', correct: false },
        { text: 'Roberta Williams', correct: false },
        { text: "Nenhuma das alternativas", correct: false }
      ]
    },
    {
      question: 'O primeiro  primeiro computador digital programável do mundo(ENIAC) foi desenvolvida por uma equipe majoritariamente feminina.',
      answers: [
        { text: "Verdadeiro", correct: true },
        { text: "Falso", correct: false}
      ]
    },
    {
      question: 'Quem foi responsável por escrever manualmente todo o código da nave Apollo 11, que levou os primeiros homens à lua?',
      answers: [
        { text: 'Katherine Johnson', correct: false },
        { text: 'Margaret Hamilton ', correct: true },
        { text: 'Karen Jones', correct: false },
        { text: 'Dorothy Vaughan ', correct: false }
      ]
    },
    {
      question: 'Quem foi responsável por descobrir a base para a tecnologia do Wi-F?',
      answers: [
        { text: 'Cheng Wei', correct: false },
        { text: 'Hedy Lamarr', correct: true },
        { text: 'Bill Gates', correct: false },
        { text: 'Anne Aaron', correct: false }
      ]
    },
    {
      question: 'Quem desenvolveu os sistemas de processamento de imagem em formatos de mídia digital usados nos primeiros anos do programa de satélites da NASA?',
      answers: [
        { text: 'Gladys Mae West ', correct: false },
        { text: 'Edith Clarke ', correct: false },
        { text: 'Kathy Kleiman ', correct: false },
        { text: 'Valerie Thomas', correct: true },
      ]
    },
  ]