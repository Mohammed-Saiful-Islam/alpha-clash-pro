/* function play(params) {
    // step-1: hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    // show the playground
    const playGroundSection=document.getElementById('play-ground');
    // console.log(playGroundSection.classList);
    playGroundSection.classList.remove('hidden');
} */

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed :', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');
    } else {
        console.log('you missed. you lost a life');
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)
// capture keyboard key press
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set rendomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}