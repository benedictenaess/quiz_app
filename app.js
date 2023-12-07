const quizInfo = [
	{
	  question:
		"Which method in JavaScript removes the last element from an array?",
	  optionA: "unshift()",
	  optionB: "remove()",
	  optionC: "pop()",
	  optionD: "push()",
	  correctAnswer: "option3",
	},
	{
	  question: "What's the scope of variables declared using const?",
	  optionA: "function scope",
	  optionB: "global scope",
	  optionC: "block scope",
	  optionD: "inline scope",
	  correctAnswer: "option3",
	},
	{
	  question:
		"Which attribute from the following must have a unique value in HTML?",
	  optionA: "class",
	  optionB: "name",
	  optionC: "title",
	  optionD: "id",
	  correctAnswer: "option4",
	},
	{
	  question: "Which option is not a part of the CSS box model?",
	  optionA: "margin",
	  optionB: "size",
	  optionC: "padding",
	  optionD: "border",
	  correctAnswer: "option2",
	},
	{
	  question: "What is the type of an array in JavaScript?",
	  optionA: "null",
	  optionB: "undefined",
	  optionC: "array",
	  optionD: "object",
	  correctAnswer: "option4",
	},
	{
	  question: "Which method is used to combine two or more strings?",
	  optionA: "append()",
	  optionB: "concat()",
	  optionC: "typeof()",
	  optionD: "attach()",
	  correctAnswer: "option2",
	},
];

const quizContainer = document.querySelector('.quiz-container');
const options = document.querySelectorAll('.option');
const question = document.querySelector('.question-text');

const optionA = document.querySelector('#option-a');
const optionB = document.querySelector('#option-b');
const optionC = document.querySelector('#option-c');
const optionD = document.querySelector('#option-d');

const errorMessage = document.querySelector('.error-message');
const submitButton = document.querySelector('.submit-button');

let currentIndex = 0;
let score = 0;

const deselectOptions = () => {
	options.forEach(option => {
		option.checked = false;
	});
}

const handleQuiz = () => {
	deselectOptions();

	const activeIndex = quizInfo[currentIndex];
	question.textContent = activeIndex.question;
	optionA.textContent = activeIndex.optionA;
	optionB.textContent = activeIndex.optionB;
	optionC.textContent = activeIndex.optionC;
	optionD.textContent = activeIndex.optionD;
}

const getAnswer = () => {
	let answer;
	options.forEach(option => {
		if (option.checked) {
			answer = option.id;
		}
	})
	return answer;
}

handleQuiz();

submitButton.addEventListener('click', () => {
	const selectedAnswer = getAnswer();
	if (!selectedAnswer) {
		errorMessage.style.display = 'block';
		return;
	} else {
		if (selectedAnswer === quizInfo[currentIndex].correctAnswer) {
			score ++;
		}
	}
	currentIndex ++;

	if (currentIndex < quizInfo.length) {
		handleQuiz();
	} else {
		quizContainer.textContent = '';
		const finalScore = document.createElement('p');
		finalScore.textContent = `Your score is ${score} out of ${quizInfo.length}`;
		quizContainer.append(finalScore);
		const reloadButton = document.createElement('button');
		reloadButton.textContent = 'Try again!';
		quizContainer.append(reloadButton);
		quizContainer.classList.add('final-score');
		reloadButton.addEventListener('click', () => {
			window.location.reload();
		})
	}
})

options.forEach(option => {
	option.addEventListener('click', () => {
		errorMessage.style.display = 'none';
	});
});
