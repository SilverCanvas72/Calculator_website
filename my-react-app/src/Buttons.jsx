function Buttons(){

    return(
        <div id='buttonsContainer'>

            <div id='firstRow'>
                <button onClick="clearDisplay" id='AC'>AC</button>
                <button onClick="appendToDisplay('+')" className='operations'>+</button>
            </div>

            <div id='secondRow'>
                <button onClick="appendToDisplay('1')">1</button>
                <button onClick="appendToDisplay('2')">2</button>
                <button onClick="appendToDisplay('3')">3</button>
                <button onClick="appendToDisplay('-')" className='operations'>-</button>
            </div>

            <div id='thirdRow'>
                <button onClick="appendToDisplay('4')">4</button>
                <button onClick="appendToDisplay('5')">5</button>
                <button onClick="appendToDisplay('6')">6</button>
                <button onClick="appendToDisplay('*')" className='operations'>x</button>
            </div>

            <div id='fourtRow'>
                <button onClick="appendToDisplay('7')">7</button>
                <button onClick="appendToDisplay('8')">8</button>
                <button onClick="appendToDisplay('9')">9</button>
                <button onClick="appendToDisplay('/')" className='operations'>/</button>
            </div>

            <div id='fifthRow'>
                <button onClick="appendToDisplay('.')">.</button>
                <button onClick="appendToDisplay('0')">0</button>
                <button onClick="calculate()" id='equals'>=</button>
            </div>

        </div>
    );
}

export default Buttons