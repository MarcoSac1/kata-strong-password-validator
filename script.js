const inputText = document.getElementById('inputText');
const char = document.getElementById('char');
const upper = document.getElementById('upper');
const number = document.getElementById('number');
const special = document.getElementById('special');
const myBar = document.getElementById('myBar');



inputText.onkeyup = function(){
    let progress = 0;

    // validazione lunghezza
    if(inputText.value.length >= 9){
        char.classList.remove('invalid');
        char.classList.add('valid');
        progress += 25; // 25% per la lunghezza valida
    }else{
        char.classList.remove('valid');
        char.classList.add('invalid');
    }

    // validazione maiuscole
    const upperCaseLetters = /[A-Z]/g;
    if(inputText.value.match(upperCaseLetters)){
        upper.classList.remove('invalid');
        upper.classList.add('valid');
        progress += 25; // 25% per almeno una maiuscola
    }else{
        upper.classList.remove('valid');
        upper.classList.add('invalid');
    }

    // validazione numeri
    const numbers = /[0-9]/g;
    if (inputText.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
        progress += 25; // 25% per almeno un numero

    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    // validazione caratteri speciali
    const specials = /[!\-"#$%&'()*+,.\/:;<=>?@[\]\^_`{|}~\\]/g;
    if (inputText.value.match(specials)) {
        special.classList.remove('invalid');        
        special.classList.add('valid');
        progress += 25; // 25% per almeno un carattere speciale
    }else{
        special.classList.remove('valid');
        special.classList.add('invalid');
    }

    move(progress);
};

function move(progress) {
    myBar.style.width = progress + '%';
}
