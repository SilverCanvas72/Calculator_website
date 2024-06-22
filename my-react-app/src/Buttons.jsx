function Buttons(){

    return(
        <div id='buttonsContainer'>

            <div id='firstRow'>
                <button id='AC'>AC</button>
                <button className='operations'>+</button>
            </div>

            <div id='secondRow'>
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button className='operations'>-</button>
            </div>

            <div id='thirdRow'>
                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button className='operations'>x</button>
            </div>

            <div id='fourtRow'>
                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button className='operations'>/</button>
            </div>

            <div id='fifthRow'>
                <button >.</button>
                <button >0</button>
                <button id='equals'>=</button>
            </div>

        </div>
    );
}


export default Buttons