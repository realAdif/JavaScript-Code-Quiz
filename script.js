var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('#timer');
var startPageEl = document.querySelector('#start');
var questionPageEl = document.querySelector("#questionsOptions");
var questionsEl = document.querySelector("#question");
var timeAddedEl = document.querySelector("#timerAdded");
var highscoreEl = document.querySelector("#score");
var optionEl = document.querySelector("#options");
var highscorePageEl = document.querySelector("#Highscore-page");
var timerLeftScoreEl = document.querySelector("#time-left-score");

console.log(timerLeftScoreEl);
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
        title: "What is Boonlen?",
        options: ['String','Numbers','True or False', 'All of Above'],
        answer: 2
    },
    {
        title: "What is a String?",
        options: ['String','Boolen','Numbers', 'All of Above'],
        answer: 0
    }
];

highscorePageEl.style.display ='none';
var highscoreObject = {
    name: "Name",
    score: 1,
    time: 0
};
var scoreNumber = highscoreObject.score;
var timerLeftScore = highscoreObject.time; 

// the start up of the page:
var secondsLeft = 20;
var startPageMode = true;
pageMode();
onClick();
highscorePagesNumber();

// on click event 
function onClick(){
    startButton.addEventListener("click", function(){
        startPageMode = false;
        init();
           
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
    

}


timeAddedEl.innerHTML = "";
optionEl.addEventListener('click', function(event){
    // console.log(event.target.id);
    var buttonIdex = event.target.id;
    if(currentIndex < 3){
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
        highscorePageEl.style.display ='block';
        questionPageEl.style.display = 'none';
        timerLeftScore = secondsLeft;
        console.log(timerLeftScore);
        highscorePagesNumber();
    }   
});



//console.log(highscoreEl.innerHTML = " Score Number: "+ scoreNumber)
//console.log( timerLeftScoreEl.innerHTML = "Time: "; +timerLeftScore)
function highscorePagesNumber(){
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
        timerEl.innerHTML = secondsLeft

    },1000)
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