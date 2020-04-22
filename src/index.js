import { hiddenMenu, startMenu, setAarray, setBarray, setCarray, adjectiveArray, setAanimalArray, setBanimalArray, clothesArray, emotionArray, createImage, rotateBlock } from './menu';
import onSection from './section'
import { playStartMode, playGame } from './playMode'

const playTrainButton = document.querySelector('.play-train');
const modeBox = document.querySelector('.play_box');
const mainMenu = document.querySelector('.blocks');
const menuIcon = document.querySelector('.hidden_menu');
let playMode = 'off';
let blockMemory = [];

playTrainButton.addEventListener('click', () => {
    if (playMode === 'off') {
        modeBox.style.flexDirection = 'row-reverse';
        modeBox.style.paddingLeft = '5px';
        modeBox.style.paddingRight = '15px';
        modeBox.style.background = 'linear-gradient(to right, #f1f38a 0%, #f34343 100%)';
        document.querySelector('.play_box p').innerHTML = 'PLAY';
        onPlayMode();
        playMode = 'on';
        playGame();
    } else if (playMode === 'on') {
        modeBox.style.flexDirection = 'row';
        modeBox.style.paddingLeft = '15px';
        modeBox.style.paddingRight = '5px';
        modeBox.style.background = 'linear-gradient(to right, #29ac6f 0%, #178686 100%)';
        document.querySelector('.play_box p').innerHTML = 'TRAIN';
        trainMode();
        playMode = 'off';
    }
})

onSection();  
hiddenMenu();
window.onload = startMenu();
document.querySelector('.play_button').style.display = 'none';
document.querySelector('#result').style.display = 'none';
if (document.querySelector('.resultIcon')) {
    document.querySelector('.resultIcon').style.display = 'none';
}


function trainMode() {
    document.querySelector('.play_button').style.display = 'none';
    document.querySelector('#result').style.display = 'none';
    if (document.querySelector('.resultIcon')) {
        document.querySelector('.resultIcon').style.display = 'none';
    }
    document.querySelectorAll('.blocks > a').forEach((a) => {
        a.style.backgroundSize = '305px 225px';
    })
    if (document.querySelector('.active').innerHTML !== 'Main page') {
        if (blockMemory.length !== 0) {
            for (let i = 0; i < 8; i++) {
                document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  blockMemory[i];
                createImage(i + 1);
                rotateBlock(i + 1);
            }
        }
    }
    if (blockMemory.length === 0) {
        if (document.querySelector('.active').innerHTML === 'Action (set A)') {
            for (let i = 0; i < 8; i++) {
                console.log(setAarray[i]);
                document.querySelector(`.blocks a:nth-child(${i + 1})`).innerHTML =  setAarray[i];
                createImage(i + 1);
                rotateBlock(i + 1);
            }
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
        }
    }

 
    document.querySelectorAll('.rotate').forEach((a) => {
        a.style.display = 'inline-block';
    })
    startMenu();
    blockMemory = [];
}

function onPlayMode() {
    if (document.querySelector('.active').innerHTML !== 'Main page') {
        document.querySelectorAll('.blocks > a').forEach((a) => {
            a.style.backgroundSize = '305px 275px';
            let index = a.innerHTML.toString().indexOf('<');
            console.log(index);
            let aArray = a.innerHTML.split('');
            let draft = '';
            for (let i = 0; i < index; i ++) {
                draft = draft +  aArray[i].toString();
            }
            blockMemory.push(draft);
            console.log(blockMemory);
            a.innerHTML = '';
        })
        document.querySelector('.play_button').style.display = 'block';
        document.querySelector('#result').style.display = 'flex';
    }
    document.querySelectorAll('.rotate').forEach((a) => {
        a.style.display = 'none';
    })
    playStartMode();
}