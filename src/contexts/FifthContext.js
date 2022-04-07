import React, { useCallback, useContext, useMemo, useState } from "react"


const COLOR_BACKGROUND_KEY = "colorBG"
const supportedColors = ["success", "info"]
const validateColor = (colorBG) => supportedColors.includes(colorBG) ? colorBG : 'info'


const FifthContext = React.createContext()

export const FifthContextTheProvider = ({children}) => {

    const [colorBG, setColorBG] = useState(validateColor(localStorage.getItem(COLOR_BACKGROUND_KEY)) || "info");

    // memorize a function
    const toggleColor = useCallback(() => {
        const nextColor = (colorBG==="info" ? "success" : "info")
        setColorBG(nextColor)
        localStorage.setItem(COLOR_BACKGROUND_KEY, nextColor)
    }, [colorBG])

    // memorize a value
    const value = useMemo(() => ({
        colorBG, toggleColor
    }), [colorBG, toggleColor])

    return (
        <FifthContext.Provider value ={value} >
            {children}
        </FifthContext.Provider>
    )
}

// 3 - exportamos una funcion que develve el valor del contexto
export const useFifth= () => useContext(FifthContext)

// 1 - exportamos el contexto
export default FifthContext