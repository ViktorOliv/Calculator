let firstNumber = '',
    lastNumber ='',
    sign = '',
    finish = false;

    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'], 
    action = ['-', '+', '*', '/'];

const out = document.querySelector('.line p');

function deleteAll () {
    firstNumber = '';
    lastNumber = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.del .btn').onclick = deleteAll;


// є баг, клік правіше від кнопки працює а на кнопку ні
document.querySelector('.numberArea').onclick = (event) => {
    //  pressed not button
    if (!event.target.classList.contains('btn')) return;
    // pressed btn del all
    if (event.target.classList.contains('.del .btn')) return;

    out.textContent = '';
    // take press button
    const key = event.target.textContent;
    
    // if press btn 0-9 or .
    if (digit.includes(key)) {
        if (lastNumber === '' && sign === '' ) {
            firstNumber += key;
            out.textContent = firstNumber;
        }
        else if (firstNumber !== '' && lastNumber !== '' && finish) {
            lastNumber = key;
            finish = false;
            out.textContent = lastNumber;
        }
        else {
            lastNumber += key;
            out.textContent = lastNumber;
        }
        console.log(firstNumber, lastNumber, sign);
        return;
    }

    // if press btn - + * /
    if (action.includes(key)) {
        sign = key;
        console.log(firstNumber, lastNumber, sign);
        out.textContent = sign;
        return;
    }

    if(key === '=') {
        if (lastNumber === '') lastNumber = firstNumber;         
        switch (sign) {
            case "+":
                firstNumber = (+firstNumber) + (+lastNumber);
                break;
            case "-":
                firstNumber = firstNumber - lastNumber;
                break;
            case "*":
                firstNumber = firstNumber * lastNumber;
                break;
            case "/":
                if (lastNumber === '0') {
                    out.textContent = '∞';
                    firstNumber = '';
                    lastNumber ='';
                    sign = '';
                    return;
                }
                firstNumber = firstNumber / lastNumber;
                break;
        }
        finish = true;
        out.textContent = firstNumber;
        console.log(firstNumber, lastNumber, sign);
    }
}

