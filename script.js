const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, countRightAnswers = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  right-answers
  countRightAnswers = 0;

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
 }
  document.getElementById('right-answers').innerHTML = countRightAnswers
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The tallest building in the world is located in which city?',
    answers: [
      { text: 'Dubai', correct: true },
      { text: 'US', correct: false }
    ]
  },
  {
    question: 'Which year was the original Toy Story film released in the US?',
    answers: [
      { text: '1996', correct: false },
      { text: '1999', correct: false },
      { text: '1995', correct: true },
      { text: '2001', correct: false }
    ]
  },
  {
    question: 'In 2017 the Best Picture Oscar winner was erroneously announced as La La Land. But which film actually won the award?',
    answers: [
      { text: 'Sky', correct: false },
      { text: 'Moonlight', correct: true },
      { text: 'Midnight', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Which iconic English rock band are responsible for the 1967 hit song Waterloo Sunset?',
    answers: [
      { text: 'The Kinks', correct: true },
      { text: 'The Beatles', correct: false }
    ]
  },
  {
    question: 'In which year was the popular video game Fortnite first released?',
    answers: [
      { text: '2008', correct: false },
      { text: '2015', correct: false },
      { text: '2018', correct: false },
      { text: '2017', correct: true }
    ]
  },
  {
    question: 'How many hearts does an octopus have?',
    answers: [
      { text: '3', correct: true },
      { text: '5', correct: false },
      { text: '4', correct: false },
      { text: '7', correct: false }
    ]
  },
  {
    question: 'Brazil has won the FIFA World Cup a record five times, but in what year was their last triumph?',
    answers: [
      { text: '1998', correct: false },
      { text: '2002', correct: true },
      { text: '2004', correct: false },
      { text: '2010', correct: false }
    ]
  },
  {
    question: 'How many children does Queen Elizabeth have?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '4', correct: true }
    ]
  },
  {
    question: 'Which city hosted the Olympics in the year 2000?',
    answers: [
      { text: 'Beijing', correct: false },
      { text: 'Sydney', correct: true },
      { text: 'London', correct: false },
      { text: 'Rio', correct: false }
    ]
  },
  {
    question: 'What is the national animal of Scotland?',
    answers: [
      { text: 'A Tiger', correct: false },
      { text: 'A Wolf', correct: false },
      { text: 'A Unicorn', correct: true },
      { text: 'An elephant', correct: false }
    ]
  },
  {
    question: 'Which is longer? A mile or a kilometre?',
    answers: [
      { text: 'Kilometre', correct: false },
      { text: 'A mile', correct: true },
      { text: 'IDK', correct: false },
    ]
  },
  {
    question: 'How far off the ground is a regulation NBA basketball hoop?',
    answers: [
      { text: '3 feet', correct: false },
      { text: '10 feet', correct: true },
      { text: '8 feet', correct: false },
      { text: '25 feet', correct: false }
    ]
  },
]