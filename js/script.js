    var numOfSquer = 12;
    var colors = generatRandomColor(numOfSquer);
    var pickedColor = randomColor();
    var squer = document.querySelectorAll('.squer');
    var colorDisplay = document.getElementById('colorDisplay')
    var messageDisplay = document.getElementById('message');
    var resetbtn = document.querySelector('.reset');
    var expertMode = document.getElementById('expertMode');
    var hardMode = document.getElementById('hardMode');
    var easyMode = document.getElementById('easyMode');
    var easyHard = document.querySelector('.easyHard');
    var inputred = document.getElementById('red');
    var inputgreen = document.getElementById('green');
    var inputblue = document.getElementById('blue');
    var colorSquer = document.querySelector('.colorSquer');
    var redbtn = document.querySelector('.redbtn');
    var greenbtn = document.querySelector('.greenbtn');
    var bluebtn = document.querySelector('.bluebtn');
    var expertDisplay = document.querySelector('.expertDisplay');
    var allExpertElements = document.querySelector('.allExpertElements');
    var allColorsquers = document.getElementById('container');
    var headContainer = document.querySelector('.headContainer');
    var guesedColor = document.querySelector('.guesedColor');
    var headOne = document.querySelector('.headOne');
    var reset = document.querySelector('.reset');
    var items = document.querySelectorAll('.item');
    var randomWinMessege = [
        'You Got It. Nice Work!',
        'Wow Right On The Spot. Congrats!',
        'Great You are Getting The Secret of RGBs! Congrats',
        'Wonderfull You Must know a lot about RGBs!',
        'We have a winner mate! You are becoming an expert!',
        'Some one is getting good Recognising RGBs! Great Work!',
    ];
    headOne.style.display = 'none';
    guesedColor.style.display = 'none';
    var redValue;
    var greenValue;
    var blueValue;
    allExpertElements.style.display = 'none';
    expertDisplay.style.display = 'none';
    colorDisplay.textContent = pickedColor;
    colorSquer.style.backgroundColor = pickedColor;
    titleColor();


    for (var i = 0; i < squer.length; i++) {
        //add color to squers
        squer[i].style.backgroundColor = colors[i];
        //add event listner to each squer
        squer[i].addEventListener('click', function () {
            //extract clicked quer background color
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.style.textShadow = '3px 3px white';
                messageDisplay.style.color = 'green';
                messageDisplay.textContent = 'Correct';
                changeColor();
                resetbtn.textContent = 'Play Again';
                headContainer.style.backgroundColor = pickedColor;

            } else {
                messageDisplay.style.color = 'red';
                messageDisplay.style.textShadow = '3px 3px white';
                this.style.backgroundColor = 'black';
                messageDisplay.textContent = 'Try Again';
            }

        });
    }
    resetbtn.addEventListener('click', function () {
        // var clickedColor = sqeur[i].style.backgroundColor;
        refactored();
        messageDisplay.textContent = '';
        easyHard.style.display = 'block';
        resetbtn.textContent = 'New Color'
        for (var i = 0; i < squer.length; i++) {
            squer[i].style.backgroundColor = colors[i];
            
            // squer[i].style.display = 'block';
        }
    });
    easyMode.addEventListener('click', function () {
        headOne.style.display = 'none';
        numOfSquer = 8;
        refactored();
        easyHard.style.display = 'block';
        for (var i = 0; i < squer.length; i++) {
            if (colors[i]) {
                squer[i].style.backgroundColor = colors[i];
            } else {
                squer[i].style.display = 'none';
            }
            
        }
        reset.style.display = 'inline-block';
    });

    hardMode.addEventListener('click', function () {
        numOfSquer = 12;
        headOne.style.display = 'none';
        easyHard.style.display = 'block';
        refactored();
        reset.style.display = 'inline-block';
        for (var i = 0; i < squer.length; i++) {
            squer[i].style.backgroundColor = colors[i];
            squer[i].style.display = 'block';
        }
    });
    expertMode.addEventListener('click', function () {
        easyHard.style.display = 'none';
        headOne.style.display = 'block';
        randomMessege();
        console.log("firing expertmode event handler");
        // headOne.textContent = 'Type The Three Channal Values In The Box Below to represent the color shown'
        messageDisplay.textContent = '';
        headContainer.style.backgroundColor = '#aaa';
        reset.style.display = 'none';
        guesedColor.style.display = 'none';
        pickedColor = randomColor();
        headContainer.style.display = 'block';
        colorDisplay.textContent = '';
        colorSquer.style.backgroundColor = pickedColor;
        expertDisplay.style.display = 'block';
        allExpertElements.style.display = 'block';
        allColorsquers.style.display = 'none';
        expertMode.textContent = 'RGB Expert';

    });
    greenbtn.addEventListener('click', function () {
        guesedColor.style.display = 'block';
        redValue = inputred.value;
        greenValue = inputgreen.value;
        blueValue = inputblue.value;
        inputgreen.value = '';
        inputblue.value = '';
        inputred.value = '';
        // rgbExpert(); 
        if (pickedColor === rgbExpert()) {
            ;
            console.log("you are correct");
            guesedColor.textContent = randomMessege();
            guesedColor.style.backgroundColor = rgbExpert();
        }
        else if ((!redValue) || (!greenValue) || (!blueValue)) {
            guesedColor.textContent = "You Must Enter Numerical Value";
            guesedColor.style.backgroundColor = '#aaa';
        }
        else if ((redValue < 0 || redValue > 255) ||
            (greenValue < 0 || greenValue > 255) ||
            (blueValue < 0 || blueValue > 255)) {
            guesedColor.textContent = "Try Again! Your value must be between 0 and 255";
            guesedColor.style.backgroundColor = '#aaa';
        }
        else {
            guesedColor.style.backgroundColor = rgbExpert();
            var colorblue = pickedColor;
            var arrOfPicked = colorblue.split(', ');
            console.log(arrOfPicked);
            console.log(typeof arrOfPicked[2]);
            console.log("You are Wrong");
            console.log('this is a red value ' + redValue);
            console.log('this is a green value ' + greenValue);
            console.log('this is a blue value ' + greenValue);

            for (var i = 0; i < arrOfPicked.length; i++) {
                if (arrOfPicked[1] !== greenValue) {
                    guesedColor.textContent = 'You chose The Wrong Color! Hint, the Green Channal is ' + arrOfPicked[1];
                } else if (arrOfPicked[2] !== blueValue + ')') {
                    guesedColor.textContent = 'You chose The Wrong Color! Hint, The Blue Channal is ' + arrOfPicked[2];
                } else if (arrOfPicked[0] !== 'rgb(' + redValue) {
                    guesedColor.textContent = 'You Chose The Wrong color! Try ' + pickedColor;
                }

            }
        }
        expertMode.textContent = 'Play Again';
    });
    function refactored() {
        colors = generatRandomColor(numOfSquer);
        messageDisplay.textContent = '';
        headContainer.style.display = 'block';
        headContainer.style.backgroundColor = '#aaa';
        expertDisplay.style.display = 'none';
        allColorsquers.style.display = 'block';
        allExpertElements.style.display = 'none';
        pickedColor = randomColor();
        colorDisplay.textContent =  pickedColor;
        // colorDisplay.textContent = pickedColor;
        titleColor();
    }

    function rgbExpert() {
        return 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
    }

    function changeColor(color) {
        //loop through all speur
        for (var i = 0; i < squer.length; i++) {
            squer[i].style.backgroundColor = pickedColor;
        }
    }

    function randomColor() {
        var genColor = Math.floor(Math.random() * colors.length);
        return colors[genColor];
        // console.log(genColor);
    }

    function randomMessege() {
        var genMes = Math.floor(Math.random() * randomWinMessege.length);
        return randomWinMessege[genMes];
    }

    function storRandomColor() {
        var r = Math.floor((Math.random() * 256));
        var g = Math.floor((Math.random() * 256));
        var b = Math.floor((Math.random() * 256));
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    function generatRandomColor(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(storRandomColor());
        }
        return arr;
    }
    function titleColor() {
        for (var i = 0; i < items.length; i++) {
            items[i].style.color = colors[i];
        }
    }