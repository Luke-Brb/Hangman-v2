let inputWord = [];
let wordPreview = [];
let attempts;
let correctLetters;
let wordGuess;
function addWord() {
    attempts = 6;
    wordGuess = 0;
    correctLetters = 0;
    inputWord = document.getElementById('word').value;
    const popMessage = document.getElementById('newMessage');
    popMessage.textContent = 'The word has been saved! Enter letters to discover it!';
    if (wordPreview.length > inputWord.length) {
        wordPreview = [];
    }
    for (i = 0; i < inputWord.length; ++i) {
        wordPreview[i] = "*";
    }
    document.getElementById("statusWord").innerHTML = wordPreview.join(" ");
    const popAttempts = document.getElementById('statusAttempts');
    popAttempts.textContent = "Attempts left: " + attempts;   
}
const checkLetter = (ev)=>{
    ev.preventDefault();
    inputWord = document.getElementById('word').value;
    alert(inputWord); // I notice that the entered word (inputWord) for searching letter by letter is not saved when I want to use it here.
    let inputletter = document.getElementById('letter').value;
    if (attempts > 0) {
        for (j = 0; j < inputWord.length; ++j, correctLetters < inputWord.length) {
            if (wordPreview[j] == "*" && inputWord[j] == inputletter) {
                wordPreview[j] = checkLetter;
                ++correctLetters;
            }
        }
        --attempts;
        const popAttempts = document.getElementById('statusAttempts');
        popAttempts.textContent = "Attempts left: " + attempts;
    }
    if (attempts == 0 && wordGuess == 0) {
        document.getElementById('statusAttempts').innerHTML = "--- G A M E   O V E R ---";
    }
    if (correctLetters == inputWord.length) {
        document.getElementById('statusAttempts').innerHTML = "--- Congratulations, you guessed the word! ---";
        wordGuess = 1;
    }
    document.getElementById("statusWord").innerHTML = wordPreview.join(" ");
    document.forms[1].reset();
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inputletter').addEventListener('click', checkLetter);
});
