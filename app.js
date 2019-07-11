function playSound(apple) {
    const audio = document.querySelector(`audio[data-key="${apple.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${apple.keyCode}"]`);

    if (!audio) return; // stops the function from running if there is no audio clip.
    audio.currentTime = 0; // Sets the play time back to zero each time the key is pressed.
    audio.play();
    key.classList.add("playing");
}


window.addEventListener("keydown", playSound)

// Note: ES6 arrow function did not work. Did not register classList.remove() because 'this' refers to window.
function removeTransition(event) { // needs to be above the event listener to work. 
    if (event.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

// const removeTransition = event => { // needs to be above the event listener to work.
//     if (event.propertyName !== 'transform') return;

//     key.classList.remove('playing');
// }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));