
function Output({output}){

    return(
        <div className='outputBackground'>
            <h2 id='outputText'>
                {output||'0'}
            </h2>
        </div>
    );
}

export default Output