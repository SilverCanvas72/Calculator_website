
function Output({input}){

    return(
        <div className='outputBackground'>
            <h2 id='outputText'>
                {input || '0'}
            </h2>
        </div>
    );
}

export default Output