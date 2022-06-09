var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('#timer');
var startPageEl = document.querySelector('#start');
var counterEl = document.querySelector('#counter');
var questionPageEl = document.querySelector("#questionsOptions");
var questionsEl = document.querySelector("#question");
var timeAddedEl = document.querySelector("#timerAdded");
var highscoreEl = document.querySelector("#score");
var optionEl = document.querySelector("#options");
var highscorePageEl = document.querySelector("#Highscore-page");
var timerLeftScoreEl = document.querySelector("#time-left-score");

var highscoreNameEl = document.querySelector(".highscore-name");
var highscoreScoreEl = document.querySelector(".highscore-score");
var highscoreTimeEl = document.querySelector(".highscore-time");
var nameInput = document.querySelector('#nameinput');




var questionsArrays = [
    {
        title: "Arrays in JavaScript can be used to store:",
        options: ['String','Boolen','Numbers', 'All of Above'],
        answer: 3
    },
    {
        title: "How do you wirte a Function:",
        options: ['Function()','function nameFuncrion','functions', 'All of Above'],
        answer: 1
    },
    {
        title: "If we declare a variable, let test = 1, then later, reassign, stating test = 2, what will happen? ",
        options: ['test will equal 1','JavaScript Will Have a Raise a Error','test will equal Undfined', 'All of Above'],
        answer: 0
    },
    {
        title: "What is Boonlen?",
        options: ['String','Numbers','True or False', 'All of Above'],
        answer: 2
    },
    
];

highscorePageEl.style.display ='none';

var highscoreObject = {
    name: "Name",
    score: 1,
    time: 0
};
var scoreNumber = highscoreObject.score;
const timerLeftScore = highscoreObject.time; 

// the start up of the page:
var secondsLeft = 20;
var startPageMode = true;
pageMode();
onClick();
highscorePagesNumber();



// on click event
function onClick(){
    startButton.addEventListener("click", function(){
        if(nameInput.value == ""){
            alert("Enter your name")
        }else{
            startPageMode = false;
            init();
            console.log(nameInput.value);
        }
        
           
    });
}

// All the Questions

var currentIndex  = 0;


function showQuestion(){   
    questionsEl.textContent = questionsArrays[currentIndex].title;
    questionsArrays[currentIndex].options;  
    // console.log(currentOptions);
    optionEl.innerHTML = "";
    questionsArrays[currentIndex].options.forEach(function(option, index){
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute('class','options');
        buttonEl.setAttribute('id', index);
        buttonEl.textContent = option;
        optionEl.append(buttonEl);      
    })
    timeAddedEl.innerHTML = "";
    
    optionEl.addEventListener('click', function(event){
    var buttonIdex = event.target.id;

    if(currentIndex < 4){
        if(buttonIdex == questionsArrays[currentIndex].answer){
            secondsLeft = secondsLeft + 10;
            timeAddedEl.innerHTML = "+10";           
            scoreNumber++
            console.log(scoreNumber);
            timeAddedTimer();
            currentIndex++;
            showQuestion();           
        }else{
            secondsLeft = secondsLeft - 5;
            timeAddedEl.innerHTML = "-5";
            timeAddedTimer();
        }
    }else{
        endGame();
    }   
});
}





function highscorePagesNumber(){
    const timerLeftScore = secondsLeft;
    highscoreEl.innerHTML = " Score Number: "+ scoreNumber;
    timerLeftScoreEl.innerHTML = "Time: " +timerLeftScore;
}

function timeAddedTimer(){  
    setInterval(function(){
        timeAddedEl.innerHTML = "";
    },500)  
}


// timer function
function timer(){
    var timerLeft = setInterval(function(){
        secondsLeft--;
        if(secondsLeft == 1){           
            endGame();
        }
        timerEl.innerHTML = secondsLeft;

    },1000)
}

function endGame(){
    const timerLeftScore = secondsLeft;
    highscorePageEl.style.display ='block';
    questionPageEl.style.display = 'none';
    timerEl.style.display = 'none';
    counterEl.style.display = 'none';

    highscoreNameEl.innerHTML = nameInput.value;
    highscoreScoreEl.innerHTML = scoreNumber;
    highscoreTimeEl.innerHTML = timerLeftScore;

    
    console.log(timerLeftScore);
    highscorePagesNumber();
}

// page mode function
function pageMode(){

    if(startPageMode === true){             //start Page = true
        questionPageEl.style.display = "none";
        startPageEl.style.display = "block";
    }else if(startPageMode === false){      // Question Page = false
        questionPageEl.style.display = "block";     
        startPageEl.style.display = "none";
    }
}

function init(){
    pageMode();
    timer();
    showQuestion();   
}