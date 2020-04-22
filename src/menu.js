import { playGame, playStartMode } from './playMode'

const mainMenu = document.querySelector('.blocks');
const onMenu = document.querySelector('.menu_icon');
const menuIcon = document.querySelector('.hidden_menu');
const links = document.querySelectorAll('.hidden_menu > a');
const playTrainButton = document.querySelector('.play-train');
const modeBox = document.querySelector('.play_box');
let playMode = 'off';
let hMenu = 'off';
const menuLinksArray = ['Main page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotion'];
export const setAarray = ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump'];
export const setBarray = ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'];
export const setCarray = ['argue', 'build', 'carry', 'catch', 'drive', 'drop', 'pull', 'push'];
export const adjectiveArray = ['big', 'small', 'fast', 'slow', 'friendly', 'unfriendly', 'young', 'old'];
export const setAanimalArray = ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'];
export const setBanimalArray = ['bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'];
export const clothesArray = ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'];
export const emotionArray = ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'];
const sectionArray = ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump', 'open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim', 'argue', 'build', 'carry', 'catch', 'drive', 'drop', 'pull', 'push', 'big', 'small', 'fast', 'slow', 'friendly', 'unfriendly', 'young', 'old', 'cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep', 'bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin', 'skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe', 'sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'];
const sectionArrayRu = ['плакать', 'танцевать', 'нырять', 'водить машину', 'ловить рыбу', 'летать', 'обнимать', 'прыгать', 'открывать', 'играть', 'указывать', 'ездить', 'бежать', 'петь', 'прыгать', 'плавать', 'спорить', 'строить', 'нести', 'ловить', 'водить машину', 'падать', 'тянуть', 'толкать', 'большой', 'маленький', 'быстрый', 'медленный', 'дружелюбный', 'недружелюбный', 'молодой', 'старый', 'кот', 'цепленок', 'курица', 'собака', 'конь', 'свинья', 'кролик', 'овца', 'птица', 'рыба', 'лягушка', 'жираф', 'лев', 'мышь', 'черепаха', 'дельфин', 'юбка', 'брюки', 'блузка', 'платье', 'ботинки', 'рубашка', 'пальто', 'туфли', 'грустный', 'злой', 'счастливый', 'усталый', 'удивленный', 'испуганный', 'улыбка', 'смех'];


function menuOff() {
    function displayOff() {
        menuIcon.style.display = 'none';
    }
    setTimeout(displayOff, 500);
    hMenu = 'off';
    onMenu.style.animation = 'menu_button_back 1s';
    onMenu.style.backgroundImage = `url('./src/images/menu-icon.png')`;
}

export function createImage(pos) {
    let image = document.createElement('img');
    image.className = 'rotate';
    document.querySelector(`.blocks a:nth-child(${pos})`).appendChild(image);
    document.querySelector(`.blocks a:nth-child(${pos}) img`).addEventListener('mouseover', () => {
        image.src = `./src/images/rotateHover.jpg`;
    })
    document.querySelector(`.blocks a:nth-child(${pos}) img`).addEventListener('mouseout', () => {
        image.src = `./src/images/rotate.jpg`;
    })
    image.src = `./src/images/rotate.jpg`;
}

export function rotateBlock(pos) {
    document.querySelector(`.blocks a:nth-child(${pos}) img`).addEventListener('click', () => {
        for (let j = 0; j < 65; j++) {
            const selectedBlock = document.querySelector(`.blocks a:nth-child(${pos})`);
            if (selectedBlock.innerHTML.includes(sectionArray[j])) {
                setTimeout(translateAppear, 0);
                selectedBlock.addEventListener('mouseout', () => {
                    for (let j = 0; j < 65; j++) {
                        if (selectedBlock.innerHTML.includes(sectionArrayRu[j])) {
                            selectedBlock.innerHTML = sectionArray[j];
                            createImage(pos);
                            rotateBlock(pos);
                            selectedBlock.style.paddingTop = '215px';
                            selectedBlock.style.height = '60px';
                        }
                    }
                })
                function translateAppear() {
                    selectedBlock.innerHTML = sectionArrayRu[j];
                    selectedBlock.style.paddingTop = '235px';
                    selectedBlock.style.height = '40px';
                }
            }
        }
    })
}

function onClickMenu(e) {
    for (let i = 0; i < 9; i++) {
        if (e.target.innerHTML === menuLinksArray[i]) {
            if (document.querySelector('.resultIcon')) {
                document.querySelector('.resultIcon').style.display = 'none';
            }
            if (menuLinksArray[i] === 'Action (set A)') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = setAarray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/asetA/${setAarray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/asetA/${setAarray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(2)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Action (set B)') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = setBarray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/asetB/${setBarray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    } 
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/asetB/${setBarray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(3)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Action (set C)') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = setCarray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/asetC/${setCarray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/asetC/${setCarray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(4)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Adjective') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = adjectiveArray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/aset/${adjectiveArray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/aset/${adjectiveArray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(5)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Animal (set A)') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = setAanimalArray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/ansetA/${setAanimalArray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/ansetA/${setAanimalArray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(6)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Animal (set B)') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = setBanimalArray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/ansetB/${setBanimalArray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/ansetB/${setBanimalArray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(7)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Clothes') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = clothesArray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/clset/${clothesArray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/clset/${clothesArray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(8)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Emotion') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = emotionArray[j];
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/eset/${emotionArray[j]}.jpg')`;
                        createImage(j + 1);
                        rotateBlock(j + 1);
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 0; j < 8; j++) {
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).innerHTML = '';
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundImage = `url('./src/images/eset/${emotionArray[j]}.jpg')`;
                        document.querySelector(`.blocks a:nth-child(${j + 1})`).style.backgroundSize = '305px 275px';
                        document.querySelector('.play_button').style.display = 'block';
                        document.querySelector('#result').style.display = 'flex';
                        playGame();
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(9)`).classList.add('active');
            } else if (menuLinksArray[i] === 'Main page') {
                if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                    for (let j = 1; j < 9; j++) {
                        document.querySelector(`.blocks a:nth-child(${j})`).innerHTML = menuLinksArray[j];
                        document.querySelector(`.blocks a:nth-child(${j})`).style.backgroundImage = `url('./src/images/menu/${menuLinksArray[j]}.jpg')`;
                    }
                } else if (document.querySelector('.play_box p').innerHTML === 'PLAY') {
                    for (let j = 1; j < 9; j++) {
                        document.querySelector(`.blocks a:nth-child(${j})`).innerHTML = menuLinksArray[j];
                        document.querySelector(`.blocks a:nth-child(${j})`).style.backgroundImage = `url('./src/images/menuPlay/${menuLinksArray[j]}.jpg')`;
                    }
                }
                links.forEach((a) => {
                    a.classList.remove('active');
                });
                document.querySelector(`.hidden_menu a:nth-child(1)`).classList.add('active');
            }
        }
    }
}

export function startMenu() {
    if (document.querySelector('.active').innerHTML === 'Main page') {
        for (let j = 1; j < 9; j++) {
            document.querySelector(`.blocks a:nth-child(${j})`).innerHTML = menuLinksArray[j];
            document.querySelector(`.blocks a:nth-child(${j})`).style.backgroundImage = `url('./src/images/menu/${menuLinksArray[j]}.jpg')`;
        }
    }
}

export function hiddenMenu() {
    onMenu.addEventListener('click', () => {
        if (hMenu === 'off') {
            menuIcon.style.display = 'flex';
            hMenu = 'on';
            onMenu.style.animation = 'menu_button 1s';
            onMenu.style.backgroundImage = `url('./src/images/x-icon.png')`;
        } else if (hMenu = 'on') {
            menuOff();
        }
    })

    mainMenu.addEventListener('click', (e) => {
        if (document.querySelector('.active').innerHTML === 'Main page') {
            onClickMenu(e);
        }
    })

    menuIcon.addEventListener('click', (e) => {
        links.forEach((a) => {
                a.classList.remove('active');
        })
        e.target.classList.add('active');
        menuOff();
        onClickMenu(e);
    })

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.className !== 'menu_icon') {
            menuOff();
        }
    })
}
