let firstNumber = ' ',
    lastNumber =' ',
    sign = ' ',
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


// є баг, клік мимо працює а на кнопку ні
document.querySelector('.numberArea').onclick = (event) => {
    if (!event.target.classList.contains('numberEquals')) return;
    //  pressed not button
    if (event.target.classList.contains('.del button')) return;
    // pressed btn del all

    out.textContent = '';
    // take press button
    const key = event.target.textContent;
    
    // if press btn 0-9 or .
    if (digit.includes(key)) {
        firstNumber += key;
        console.log(firstNumber, lastNumber, sign);
        out.textContent = firstNumber;
    }
}