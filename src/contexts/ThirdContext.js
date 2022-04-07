import React, { useContext, useState } from "react"

// 1 - creamo un contexto
const ThirdContext = React.createContext()

//2 - creamos un componente que va a exportar un provider
// a este componente le va a llegar por props un children (ex: app)
export const ThirdContextTheProvider = ({children}) => {

    // 4 - creamos un estado para asignar al value  un valor que pueda variar
    const [valor, setValor] = useState("caca");
    const [color, setColor] = useState("lightGreen");

    // 5 - creamos una funcion que hace un toggle del valor
    const toggleValor = () => setValor(valor==="caca" ? "pipi" : "caca")
    const toggleColor = () => setColor(color==="lightGreen" ? "lightBlue" : "lightGreen")
    return (
        // 6 - asignamos a value un objecto con los valores que queramos 
        <ThirdContext.Provider value ={{
            valor,
            toggleValor,
            color,
            toggleColor
        }} >
            {children}
        </ThirdContext.Provider>
    )
}

// 3 - exportamos una funcion que develve el valor del contexto
export const useThird = () => useContext(ThirdContext)

// 1- exportamos el contexto
export default ThirdContext