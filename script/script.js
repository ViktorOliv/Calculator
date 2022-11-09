let firstNumber = ' ',
    lastNumber =' ',
    sing = ' ',
    finish = false;

    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'], 
    action = ['-', '+', '*', '/'];

const out = document.querySelector('.line p');

function deleteAll () {
    firstNumber = ' ';
    lastNumber = ' ';
    sing = ' ';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.del button').onclick = deleteAll;