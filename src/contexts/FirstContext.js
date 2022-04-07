import React, { useContext } from "react"

const FirstContext = React.createContext()

//we use this in the example 3
export const useFirst = () => useContext(FirstContext)

export default FirstContext