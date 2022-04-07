import React from 'react';
import FifthContext, { useFifth } from '../contexts/FifthContext';



const Fifthcontextpage = () => {

    const color = useFifth(FifthContext)

    return (
    <div className={`firstContext bg-${color.colorBG}`}>
    <h3>FIFTH CONTEXT</h3>
    <h2>useMemo + useCallback</h2>
    <h5>This is the proper way of using Contexts</h5>
    <p>If someghing changes in the Browser Router, </p>
    <p>the Consumer will be re-rendered as well as all the Browser Router children. </p>
    <p>To prevent this we are going to use useMemo and useCallback</p>
    <p>In this way, the context will be rerendered only when the value changes</p>

    <button  onClick={color.toggleColor}
    className='btn btn-warning mb-3 mt-3'> 
    change the color of the background!
    </button>

    <p>the color now is : <b>{color.colorBG}</b></p>
    </div>
    )
}

export default Fifthcontextpage;
