import React from 'react'
import FirstContext, { useFirst } from '../contexts/FirstContext'
import SecondContext, { useSecond } from '../contexts/SecondContext'

export default function SecondContextPage() {

    const value = useSecond(SecondContext)
    const value2 = useFirst(FirstContext)

  return (
    <div className="firstContext">
        <div>
            <h3>SECOND CONTEXT</h3>
            <p>- creating the Provider in the Context component</p>
            <p>- declaring the value in the Provider </p>
            <p>- wrap the destination with the component, the destination will be the "children" props</p>
            <hr />
            <p>SecondContext.Provider value ="hello" </p>
            <p>SECOND CONTEXT VALUE : <span>{value}</span></p>
        </div>
        <hr />
        <div>
            <p>we have access to the first component too:</p>
            <p>FIRST CONTEXT VALUE: <span>{value2}</span></p>
        </div>
    </div>

  )
}
