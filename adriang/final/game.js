const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
	{
		question: 'What did Einstein never discover during his miracle year (or any year)?',
		choice1: 'The existance of atoms',
		choice2: 'The existance of neutrons',
		choice3: 'That light has the fastest possible speed of anything in the universe',
		choice4: 'Mass-energy equivalence',
		answer: 2,
	},
	{
		question: 'What two elements did the Marie Curie discover?',
		choice1: 'Plutonium and Fermium',
		choice2: 'Uranium and Curium',
		choice3: 'Redium and Polonium',
		choice4: 'Radium and Polonium',
		answer: 4,
	},
	{
		question: 'What is Richard Feynmans signature contribution to physics?',
		choice1: 'Feynman Diagrams',
		choice2: 'Bose-Feynman condensate',
		choice3: 'Feynman law',
		choice4: 'Feynman trajectories',
		answer: 1,
	},
	{
		question: 'What is Isaac Newtons signature contribution to science and mathematics?',
		choice1: 'Calculus',
		choice2: 'Newtons 3 laws',
		choice3: 'Universal law of gravitation',
		choice4: 'Newtonian trajectories',
		answer: 4,
	},
	{
		question: 'What is the equation to calculuate acceleration',
		choice1: 'a=ΔV/td',
		choice2: 'a=ΔV/t',
		choice3: 'a=ΔV/g',
		choice4: 'a=ΔV/2t',
		answer: 2,
	},
	{
		question: 'What is the equation to calculate the distance an object has fallen when droped ffrom a height?',
		choice1: 'd=at2',
		choice2: 'd=½vt2',
		choice3: 'd=½at3',
		choice4: 'd=½gt2',
		answer: 4,
	},
	{
		question: 'What is the equation to calculate potential energy?"',
		choice1: 'P.E.=m',
		choice2: 'P.E.=mgh',
		choice3: 'P.E.=mg',
		choice4: 'P.E.=mh',
		answer: 2,
	},
	{
		question: 'What is the equation to calculate kinetic energy?"',
		choice1: 'K.E.=½mv',
		choice2: 'K.E.=½mv2',
		choice3: 'K.E.=½mv3',
		choice4: 'K.E.=mgh',
		answer: 2,
	},
	{
		question: 'What is the equatiion to calculuate weight?"',
		choice1: 'W=m',
		choice2: 'W=g',
		choice3: 'W=mg',
		choice4: 'W=mg/2',
		answer: 3,
	},
	{
		question: 'What is the equation for Newtons second law?"',
		choice1: 'Fg=(Gm1m2)/r2',
		choice2: 'F=ma',
		choice3: 'J=FΔt',
		choice4: 'po=pf',
		answer: 2,
	}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
	questionCounter = 0;
	score = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () ==> {
	if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score)
		
		return window.location.assign('end.html')
	}
	
	questionCounter++
	progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
	progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
	
	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion = availableQuestions[questionsIndex]
	question.innerText = currentQuestion.question
	
	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})
	
	availableQuestions.splice(questionsIndex, 1)
	
	acceptingAnswers = true
}

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(!acceptingAnswers) return
		
		acceptingAnswers = false
		const selectedChoice = e.target
		const selectedAnswer = selectedChoice.dataset['number']
		
		let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
		
		if(classToApply === 'correct') {
			incrementScore(SCORE_POINTS)
		}
		
		selectedChoice.parentElement.classList.add(classToApply)
		
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply)
			getNewQuestion()
			
		}, 1000)
	})
})

incrementScore = num =>{
	scoer +=num
	scoreText.innerText = score
}

startGame()