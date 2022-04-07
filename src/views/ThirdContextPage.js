import React from 'react'
import FirstContext, { useFirst } from '../contexts/FirstContext'
import SecondContext, { useSecond } from '../contexts/SecondContext'
import ThirdContext, { useThird } from '../contexts/ThirdContext'

export default function ThirdContextPage() {

    const value = useThird(ThirdContext)
    const value1 = useFirst(FirstContext)
    const value2 = useSecond(SecondContext)

  return (
    <div className='firstContext'>
        <h3>THIRD CONTEXT</h3>
        <p>Same as before, but this time the value is not hardcoded in the provider.</p>
        <p> We pass through the function useThird(): a value, and a function that modify the value.</p>
        <p>- declare a state so we can have a variable value</p>
        <p>- declare a function that modify the state</p>
        <p>- pass as value in the Provider : the state and the function</p>
        <hr />
        <button onClick={value.toggleValor} className="btn btn-warning mb-3"> 
            change the state of the value! 
        </button>
        <p>The value of the third context is : <b>{value.valor}</b></p>
        <p>The value of the first context is : <b>{value1}</b></p>
        <p>The value of the second context is : <b>{value2}</b></p>   
    </div>
  )
}

