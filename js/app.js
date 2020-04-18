'use strict';

window.onload = function(){
	let num = document.querySelector('#num');
	let test = document.querySelector('#test');
	let runButton = document.querySelector('.run');
	let testRun = document.querySelector('.testrun');
	let c = document.querySelectorAll('.cells');
	let question = document.querySelector('.question');
	let answer = document.querySelector('.answer');
	let answerSubmit = document.querySelector('.answerSubmit');
	let rnd;

	runButton.onclick = function(){
		for ( let i=0; i<9; i++){
			c[i].innerText = (`${i + 1} * ${num.value} = ${(num.value * (i+1))}`);
		

		}

	}

	testRun.onclick = function(){
		answer.value =''; answer.style.background = 'white'; answer.style.color = 'black';
		rnd = getRandom(1,9);
		question.innerText = (`сколько будет ${test.value} * ${rnd} ?`);

			answerSubmit.onclick = askAnswer;
		function askAnswer(){
			console.log(answer.value);
			if (answer.value == (rnd * test.value))
				{answer.value ='Умничка'; answer.style.background = 'green'; answer.style.color = 'white'}
			else {answer.value = 'Неправильно' ;answer.style.background = 'red'; answer.style.color = 'white'}
		}
	}



function getRandom(min, max ){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


}