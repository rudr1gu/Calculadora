let resultado = 0;
let buffer = "0";
let operadores;

const screen = document.getElementById('tela');

let btnClick = (value) =>{
    if(isNaN(value)){
        handleSymbol(value)
    } else {
        handleNumber(value)
    }

    screen.innerText = buffer
}

let handleSymbol = (symbol) =>{
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

let handleMath = (symbol) =>{
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

let flushOperation = (intbuffer) =>{
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

let handleNumber = (numberString) =>{
    if (buffer === '0'){
        buffer = numberString
    } else{
        buffer += numberString
    }
}

let init = () =>{
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        btnClick(event.target.innerText);
        console.log(event.target)
    })
}

init()