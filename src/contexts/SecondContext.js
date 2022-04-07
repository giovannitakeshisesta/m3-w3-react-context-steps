import React, { useContext } from "react"

// creamo un contexto
const SecondContext = React.createContext()

//creamos un componente que va a exportar un provider
// a este componente le va a llegar por props un children
export const SecondContextTheProvider = ({children}) => {
    return (
        <SecondContext.Provider value ="hello" >
            {children}
        </SecondContext.Provider>
    )
}

export const useSecond = () => useContext(SecondContext)

export default SecondContext