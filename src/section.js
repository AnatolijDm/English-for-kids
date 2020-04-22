const mainMenu = document.querySelector('.blocks');
const sectionArray = ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump', 'open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim', 'argue', 'build', 'carry', 'catch', 'drive', 'drop', 'pull', 'push', 'big', 'small', 'fast', 'slow', 'friendly', 'unfriendly', 'young', 'old', 'cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep', 'bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin', 'skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe', 'sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'];

export default function onSection() {
    mainMenu.addEventListener('click', (e) => {
        if (document.querySelector('.active').innerHTML !== 'Main page') {
            if (document.querySelector('.play_box p').innerHTML === 'TRAIN') {
                for (let i = 0; i < 65; i++) {
                    if (e.target.innerHTML.includes(sectionArray[i])) {
                        let sound = document.createElement('audio');
                        sound.src = `./src/sound/${sectionArray[i]}.mp3`;
                        sound.play();
                    }
                }
            }

        }
    })
}