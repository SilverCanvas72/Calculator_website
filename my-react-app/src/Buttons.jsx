function Buttons({ onButtonClick}){

    return(
        <div id='buttonsContainer'>

            <div id='firstRow'>
                <button id='AC' onClick={() => onButtonClick('AC')}>AC</button>
                <button className='operations' onClick={() => onButtonClick('+')}>+</button>
            </div>

            <div id='secondRow'>
                <button onClick={() => onButtonClick('1')}>1</button>
                <button onClick={() => onButtonClick('2')}>2</button>
                <button onClick={() => onButtonClick('3')}>3</button>
                <button className='operations' onClick={() => onButtonClick('-')}>-</button>
            </div>

            <div id='thirdRow'>
                <button onClick={() => onButtonClick('4')}>4</button>
                <button onClick={() => onButtonClick('5')} >5</button>
                <button onClick={() => onButtonClick('6')}>6</button>
                <button className='operations' onClick={() => onButtonClick('*')}>x</button>
            </div>

            <div id='fourtRow'>
                <button onClick={() => onButtonClick('7')}>7</button>
                <button onClick={() => onButtonClick('8')}>8</button>
                <button onClick={() => onButtonClick('9')}>9</button>
                <button className='operations' onClick={() => onButtonClick('/')}>/</button>
            </div>

            <div id='fifthRow'>
                <button onClick={() => onButtonClick('.')}>.</button>
                <button onClick={() => onButtonClick('0')}>0</button>
                <button id='equals' onClick={() => onButtonClick('=')}>=</button>
            </div>

        </div>
    );
}


export default Buttons