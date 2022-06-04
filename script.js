var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('#timer');
var startPageEl = document.querySelector('#start');
var QustionPageEl = document.querySelector("#qustionsOptions");
var qustionsEl = document.querySelector("#qustion");

var optionOne = document.querySelector(".optionOne");
var optionTwo = document.querySelector(".optionTwo");
var optionThree = document.querySelector(".optionThree");
var optionFour = document.querySelector(".optionFour");

var secondsLeft = 20;
var startPageMode = true;
pageMode();





startButton.addEventListener("click", function(){
    startPageMode = false;
    pageMode();
    qustions();

    var timerLeft = setInterval(function(){
        secondsLeft--;
        timerEl.innerHTML = secondsLeft

    },1000)


})

function qustions(){
    var qustionsOne = 'Arrays in JavaScript can be used to store';
    var qustionsTwo = 'How do you wirte a Function';
    var qustionsThree = 'What is Boonlen?';
    var qustionsFour = 'What is a String?';

    var allQustions = [qustionsOne,qustionsTwo,qustionsThree,qustionsFour];

    var randomQustions = allQustions[Math.floor(Math.random()* 4)];

    console.log(randomQustions);
    qustionsEl.textContent = randomQustions;
    options()
    

    function options(){
        if(randomQustions === allQustions[0]){
            optionOne.textContent = 'Strings';
            optionTwo.textContent = 'Numbers';
            optionThree.textContent = 'Boolen';
            optionFour.textContent = 'All of the Above';

        }else if(randomQustions === allQustions[1]){
            optionOne.textContent = 'MyFunction =';
            optionTwo.textContent = 'Function';
            optionThree.textContent = 'Function FuctionName(){}';
            optionFour.textContent = 'none of the Above';

        }else if(randomQustions === allQustions[2]){
            optionOne.textContent = 'Strings';
            optionTwo.textContent = 'Numbers';
            optionThree.textContent = 'True or False';
            optionFour.textContent = 'All of the Above';

        }else if(randomQustions === allQustions[3]){
            optionOne.textContent = 'Words';
            optionTwo.textContent = 'Numbers';
            optionThree.textContent = 'Boolen';
            optionFour.textContent = 'All of the Above';

        }
    }
}


function pageMode(){

    if(startPageMode === true){
        QustionPageEl.style.display = "none";
        startPageEl.style.display = "block";
    }else if(startPageMode === false){
        QustionPageEl.style.display = "block";     
        startPageEl.style.display = "none";
    }
}