import FirstContext, { useFirst } from "../contexts/FirstContext"
import { useContext } from "react"


const Home = () => {
  const value = useContext(FirstContext)
  const value2 = useFirst()

  return (
    <div className="firstContext">
      <h3>FIRST CONTEXT</h3>
      <p>- creating the Provider in the Index.js</p>
      <p>- declaring the value in the Provider </p>
      <p>FirstContext.Provider value="hola"</p>

      {/* FIRST EXAMPLE */}
      <FirstContext.Consumer>
      {(value) => (
        <div className="exampleBox">
          <h5>First example: get the value through the CONSUMER</h5>
          <p>We "wrap" the "destination" with the Consumer</p>
          <p>FIRST CONTEXT VALUE: <span>{value}</span></p>
        </div>
      )}
      </FirstContext.Consumer>

      {/* SECOND EXAMPLE */}
      <div className="exampleBox">
        <h5>Second example: get the value through useCONTEXT hook</h5>
        <p>We <b> dont</b> "wrap" the "destination" with the Consumer</p>
        <p>instead we consume the context using the hook : const value = useContext(FirstContext)</p>
        <p>FIRST CONTEXT VALUE: <span>{value}</span></p>
      </div>

      {/* THIRD EXAMPLE */}
      <div className="exampleBox">
        <h5>Third example: get the value through a FUNCTION that calls a hook</h5>
        <p>Is the same of before, but instead of creating the hook in this page, </p>
        <p>we created it in the  createContext() page and export it as a function</p>
        <p>export const useFirst = () => useContext(FirstContext)</p>

        <p>const value2 = useFirst()</p>
        <p>FIRST CONTEXT VALUE: <span>{value2}</span></p>
      </div>
    </div>
  )
}

export default Home