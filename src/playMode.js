import { setAarray, setBarray, setCarray, adjectiveArray, setAanimalArray, setBanimalArray, clothesArray, emotionArray } from './menu';

const menuLinksArray = ['Main page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotion'];
const sectionArray = ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump', 'open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim', 'argue', 'build', 'carry', 'catch', 'drive', 'drop', 'pull', 'push', 'big', 'small', 'fast', 'slow', 'friendly', 'unfriendly', 'young', 'old', 'cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep', 'bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin', 'skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe', 'sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'];

export function playStartMode() {
    if (document.querySelector('.active').innerHTML === 'Main page') {
        for (let j = 1; j < 9; j++) {
            document.querySelector(`.blocks a:nth-child(${j})`).innerHTML = menuLinksArray[j];
            document.querySelector(`.blocks a:nth-child(${j})`).style.backgroundImage = `url('./src/images/menuPlay/${menuLinksArray[j]}.jpg')`;
        }
    }
}

export function playGame() {
    document.querySelector('.play_button').addEventListener('click', () => {
        document.querySelector('.play_button').innerHTML = '';
        let image = document.createElement('img');
        image.className = 'retry';
        document.querySelector('.play_button').appendChild(image);
        image.src = `./src/images/restart.png`;
        document.querySelector('.play_button').style.width = '50px';
        document.querySelector('.play_button').style.borderRadius = '50%';
        choosingName();
    })
}

function choosingName() {

    if (document.querySelector('.active').innerHTML === 'Action (set A)') {
        let resultArray = [];
        let numberResult = 1;
        game(2, 1, 1);

        function game(pos, next, numberR) {
            if (numberResult <= 5) {
                let sound = document.createElement('audio');
                sound.src = `./src/sound/${setAarray[pos]}.mp3`;
                sound.play();
                document.querySelector('.blocks').addEventListener('click', (e) => {
                    if(e.target.style.backgroundImage.includes(setAarray[pos])) {
                        document.querySelector(`#result div:nth-child(${numberR})`).style.background = 'yellow';
                        let sound = document.createElement('audio');
                        sound.src = `./src/sound/correct.mp3`;
                        sound.play();
                        resultArray.push(1);
                        numberResult = numberResult + 1;
                        game(next, pos + 1, numberR + 1);
                    } else {
                        document.querySelector(`#result div:nth-child(${numberR})`).style.background = 'red';
                        let sound = document.createElement('audio');
                        sound.src = `./src/sound/failure.mp3`;
                        sound.play();
                        numberResult = numberResult + 1;
                        game(next, pos + 1, numberR + 1);
                    }
                })
            }
        }
        console.log(numberResult);
        console.log(resultArray);
        if(numberResult >= 5) {
            if(resultArray.length === 5) {
                document.querySelector('.blocks__square').style.display = 'none';
                let icon = document.createElement('img');
                icon.src = `./src/images/success.jpg`;
                icon.className = 'resultIcon';
                document.querySelector('.blocks').appendChild(icon);
                let sound = document.createElement('audio');
                sound.src = `./src/sound/success.mp3`;
                sound.play();
            } else if (resultArray.length < 5) {
                document.querySelector('.blocks__square').style.display = 'none';
                let icon = document.createElement('img');
                icon.className = 'resultIcon';
                icon.src = `./src/images/failure.jpg`;
                document.querySelector('.blocks').appendChild(icon);
                let sound = document.createElement('audio');
                sound.src = `./src/sound/failure.mp3`;
                sound.play();
            }
        }
        
    }
/*
    } else if (document.querySelector('.active').innerHTML === 'Action (set B)') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  setBarray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    } else if (document.querySelector('.active').innerHTML === 'Action (set C)') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  setCarray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    } else if (document.querySelector('.active').innerHTML === 'Adjective') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  adjectiveArray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    } else if (document.querySelector('.active').innerHTML === 'Animal (set A)') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  setAanimalArray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    } else if (document.querySelector('.active').innerHTML === 'Animal (set B)') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  setBanimalArray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    } else if (document.querySelector('.active').innerHTML === 'Clothes') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  clothesArray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    } else if (document.querySelector('.active').innerHTML === 'Emotion') {
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  emotionArray[i];
            createImage(i + 1);
            rotateBlock(i + 1);
        }
    }*/
}