var startButton = document.querySelector('.start-button-page');
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
var tableHighscore =document.querySelector("#Hightscore-table");
var PlayAgainEl = document.querySelector(".start-button");

var questionsArrays = [
    {
        title: "Arrays in JavaScript can be used to store:",
        options: ['String','Boolen','Numbers', 'All of Above'],
        answer: 3
    },
    {
        title: "How do you wirte a Function:",
        options: ['Function()','function nameFunction(){}','functions', 'All of Above'],
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
var secondsTimer = 20;
var startPageMode = true;
pageMode();

var highscoreObject = {
    name: "Name",
    score: 0,
    time: 0
};

var highscores = JSON.parse(localStorage.getItem("highscores"));
if(highscores == null){
    highscores = []
}
console.log(highscores);
var scoreNumber = highscoreObject.score;

// on click event

    startButton.addEventListener("click", function(){
        if(nameInput.value == ""){
            alert("Enter your name");
        }else{
            startPageMode = false;
            init();   
        }    
    });

    PlayAgainEl.addEventListener("click", function(){
        timerLeft = 20;
        currentIndex = 0;
        scoreNumber = 0;
        secondsLeft = 20;
        highscoreObject = {
            name: "Name",
            score: 0,
            time: 0
        };
        timerEl.innerHTML = secondsLeft; 
        timerEl.style.display = 'block';
        counterEl.style.display = 'block';
        highscorePageEl.style.display ='none';

        init();

    });   

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

}

optionEl.addEventListener('click', function(event){
    currentIndex++;
    console.log( "currentIndex1: ", currentIndex);
    var buttonIdex = event.target.id;
    
        console.log( "currentIndex2: ", currentIndex);
        if(buttonIdex == questionsArrays[currentIndex -1].answer){
            secondsLeft = secondsLeft + 10;
            timeAddedEl.innerHTML = "+10";           
            scoreNumber++;
            console.log(scoreNumber);
            timeAddedTimer();
                   
        }else{
            secondsLeft = secondsLeft - 5;
            timeAddedEl.innerHTML = "-5";
            timeAddedTimer();
        }
        if (currentIndex < questionsArrays.length){
            showQuestion();
            
        }else{
            highscorePagesNumber();
            endGame(secondsLeft,scoreNumber);
        }
     
});



function highscorePagesNumber(){
    const timerLeftScore = secondsLeft;
    highscoreEl.innerHTML = " Score Number: "+ scoreNumber;
    timerLeftScoreEl.innerHTML = "Time: " +timerLeftScore;

    highscorePageEl.style.display ='block';
    questionPageEl.style.display = 'none';
    timerEl.style.display = 'none';
    counterEl.style.display = 'none'; 
}

function endGame(secondsLeft,scoreNumber){
    highscoreObject.name = nameInput.value;
    highscoreObject.score = scoreNumber;
    highscoreObject.time = secondsLeft;
    highscores.push(highscoreObject);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    clearInterval(timerLeft);
    //Loop thur highscore 
    tableHighscore.innerHTML = "";
    for(var i = 0;i < highscores.length;i++){
        //make a tr El
        var tr = document.createElement("tr");
        //make a td El
        var tdName = document.createElement("td");
        var tdScore = document.createElement("td");
        var tdTime = document.createElement("td");
        tdName.append(highscores[i].name);
        tdName.setAttribute("class","highscore-2");
        tdScore.append(highscores[i].score);
        tdScore.setAttribute("class","highscore-2");
        tdTime.append(highscores[i].time);
        tdTime.setAttribute("class","highscore-2"); 
        tr.append(tdName);
        tr.append(tdScore);
        tr.append(tdTime);
        tableHighscore.append(tr);
    }
        


}



function timeAddedTimer(){  
    setInterval(function(){
        timeAddedEl.innerHTML = "";
    },500)  
}

var timerLeft;
// timer function
function timer(){
    timerLeft = setInterval(function(){
        secondsLeft--;
        secondsTimer--;
        timerEl.innerHTML = secondsLeft;
        if(secondsLeft < 1){
            // highscoreNameEl.innerHTML = nameInput.value; 
            // highscoreTimeEl.innerHTML = timerLeftScore;         
            highscorePageEl.style.display ='block';
            questionPageEl.style.display = 'none';
            timerEl.style.display = 'none';
            counterEl.style.display = 'none';
            endGame(secondsLeft,scoreNumber);
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