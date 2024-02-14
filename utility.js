function hideElementById(elementId)
{
const element = document.getElementById(elementId);
element.classList.add('hidden');
}

function showElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId)
{
    const element =document.getElementById(elementId);
    element.style.backgroundColor = "orange";
}

function removeElementByid(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('orange');
}

function getRandomAlphabet()
{
    const alphabetString ="abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

