import { NavLink } from "react-router-dom";
import FourthContext, { useFourth } from "../contexts/FourtContext";
// import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme()

  const color = useFourth(FourthContext)
  
  return (
    <nav className="navbar navbar-expand-lg  sticky-top  navbar-light  navColor"  style={{backgroundColor:`${color.color}`}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CONTEXTS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav d-flex">

              <li className="nav-item px-3">
                <NavLink
                  to="/firstContextPage"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > First Context 
                </NavLink>
              </li>

              <li className="nav-item px-3">
                <NavLink
                  to="/secondContextPage"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > Second Context
                </NavLink>
              </li>

              <li className="nav-item px-3">
                <NavLink
                  to="/thirdContextPage"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > Third Context
                </NavLink>
              </li>

              <li className="nav-item px-3">
                <NavLink
                  to="/fourthContextPage"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > + Local Storage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fifthContextPage"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > + UseMemo/useCallback
                </NavLink>
              </li>

                
              
              
          </ul>

        </div>
      </div>
    </nav>

);
};

export default Navbar

{/* <button onClick={toggleTheme}>{theme}</button> */}