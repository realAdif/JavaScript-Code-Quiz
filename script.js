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




// the start up of the page:
highscorePageEl.style.display ='none';
var secondsLeft = 20;
var startPageMode = true;
pageMode();
onClick();
//highscorePagesNumber();

var highscoreObject = {
    name: "Name",
    score: 0,
    time: 0
};

var scoreNumber = highscoreObject.score;







// on click event
function onClick(){
    startButton.addEventListener("click", function(){
        if(nameInput.value == ""){
            alert("Enter your name")
        }else{
            startPageMode = false;
            init();
            
        }
        
           
    });
}

// All the Questions

var currentIndex  = 0;
timeAddedEl.innerHTML = "";

function showQuestion(){   
    questionsEl.textContent = questionsArrays[currentIndex].title;
    questionsArrays[currentIndex].options;  
    optionEl.innerHTML = "";
    questionsArrays[currentIndex].options.forEach(function(option, index){
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute('class','options');
        buttonEl.setAttribute('id', index);
        buttonEl.textContent = option;
        optionEl.append(buttonEl);      
    })
    optionEl.addEventListener('click', function(event){
        var buttonIdex = event.target.id;
        if( currentIndex < 4){
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
            highscorePagesNumber();
            endGame();
        }   
    });
    
   
}



function highscorePagesNumber(){
    const timerLeftScore = secondsLeft;
    highscoreEl.innerHTML = " Score Number: "+ scoreNumber;
    timerLeftScoreEl.innerHTML = "Time: " +timerLeftScore;

    highscorePageEl.style.display ='block';
    questionPageEl.style.display = 'none';
    timerEl.style.display = 'none';
    counterEl.style.display = 'none';

    
}

function endGame(){
    const timerLeftScore = secondsLeft;
    highscoreNameEl.innerHTML = nameInput.value;
    highscoreScoreEl.innerHTML = scoreNumber;
    highscoreTimeEl.innerHTML = timerLeftScore;
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
        if(secondsLeft < 1){
            highscoreNameEl.innerHTML = nameInput.value; 
            highscoreTimeEl.innerHTML = timerLeftScore;         
            highscorePageEl.style.display ='block';
            questionPageEl.style.display = 'none';
            timerEl.style.display = 'none';
            counterEl.style.display = 'none';
        }
        timerEl.innerHTML = secondsLeft;

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