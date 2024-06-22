function Buttons(){

    return(
        <div id='buttonsContainer'>

            <div id='firstRow'>
                <button id='AC'>AC</button>
                <button onClick="appendToDisplay('+')" className='operations'>+</button>
            </div>

            <div id='secondRow'>
                <button id='one'>1</button>
                <button id='two'>2</button>
                <button id='three'>3</button>
                <button id='minus' className='operations'>-</button>
            </div>

            <div id='thirdRow'>
                <button id='four'>4</button>
                <button id='five'>5</button>
                <button id='six'>6</button>
                <button id='multiply' className='operations'>x</button>
            </div>

            <div id='fourtRow'>
                <button id='seven'>7</button>
                <button id='eight'>8</button>
                <button id='nine'>9</button>
                <button id='divide' className='operations'>/</button>
            </div>

            <div id='fifthRow'>
                <button id='decimal'>.</button>
                <button id='zero'>0</button>
                <button id='equals'>=</button>
            </div>

        </div>
    );
}

export default Buttons