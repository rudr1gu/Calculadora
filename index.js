let resultado = 0
let buffer = "0"
let operadores

const screen = document.querySelector('.screen')

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value)
    } else {
        handleNumber(value)
    }

    screen.innerText = buffer
}

function handleSymbol(symbol){
    switch(symbol){
    case 'C':
        buffer = '0';
        resultado = 0;
        break;
    case '=':
        if(operadores === null){
            return
        }
        flushOperation(parseFloat(buffer));
        operadores = null
        buffer = resultado
        resultado = 0
        break;
    case '←':
        if(buffer.length ===1){
            buffer ='0';
        } else {
            buffer = buffer.substring(0, buffer.length - 1)
        }
        break;
         
    case '.':
        buffer += '.'
        break
        
    case '+':
    case '-':
    case 'x':
    case '÷':
        handleMath(symbol);
        break;

    }

}

function handleMath(symbol){
    if (buffer === '0'){
        return;
    }

    const intbuffer = parseFloat(buffer)

    if(resultado === 0){
        resultado = intbuffer
    } else {
        flushOperation(intbuffer)
    }

    operadores = symbol
    buffer = '0'
}

function flushOperation(intbuffer){
    if(operadores === '+'){
        resultado += intbuffer
    } else if( operadores === '-'){
        resultado -= intbuffer
    }else if( operadores === 'x'){
        resultado *= intbuffer
    }else if( operadores === '÷'){
        resultado /= intbuffer
    }
}

function handleNumber(numberString){
    if (buffer === '0'){
        buffer = numberString
    } else{
        buffer += numberString
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init()