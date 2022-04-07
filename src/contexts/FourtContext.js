import React, { useContext, useState } from "react"

// 7 - Local storage
// el nombre de la Key en locale storage
const COLOR_KEY = "color"
// los valores que se pueden aceptar desde el local Storage
const supportedColors = ["lightBlue", "lightGreen"]

const validateColor = (color) => supportedColors.includes(color) ? color : 'lightGreen'


// 1 - creamo un contexto
const FourthContext = React.createContext()

//2 - creamos un componente que va a exportar un provider
// a este componente le va a llegar por props un children (ex: app)
export const FourthContextTheProvider = ({children}) => {

    // 4 - creamos un estado para asignar al value  un valor que pueda variar
    // el valor que tendrá de default será lo que llega del local storage
    // o uno que elegimos de default
    const [color, setColor] = useState(validateColor(localStorage.getItem(COLOR_KEY)) || "lightGreen");

    // 5 - creamos una funcion que hace un toggle del valor
    const toggleColor = () => {
        const nextColor = (color==="lightGreen" ? "lightBlue" : "lightGreen")
        setColor(nextColor)
        localStorage.setItem(COLOR_KEY, nextColor)
    }
    return (
        // 6 -  asignamos a value un objecto con los valores que queramos 
        <FourthContext.Provider value ={{
            color,
            toggleColor
        }} >
            {children}
        </FourthContext.Provider>
    )
}

// 3 - exportamos una funcion que develve el valor del contexto
export const useFourth= () => useContext(FourthContext)

// 1 - exportamos el contexto
export default FourthContext