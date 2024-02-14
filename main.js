// function play(){
//     document.getElementById('home-screen').classList.add("hidden");
//     document.getElementById("play-ground").classList.remove("hidden");
// }

function continueGame()
{
    const alphabet = getRandomAlphabet();

    const currenAlphabetElement = document.getElementById('current-alphabet');
    currenAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

}

function play()
{
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame(); 
}
