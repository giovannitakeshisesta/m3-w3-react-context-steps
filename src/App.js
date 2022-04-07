import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

//  VIEWS
import Home from "./views/Home";
import FirstContextPage  from "./views/FirstContextPage";
import SecondContextPage from "./views/SecondContextPage";
import ThirdContextPage  from "./views/ThirdContextPage";
import FourthContextPage from "./views/FourthContextPage";
import "./App.css";
import Fifthcontextpage from "./views/FifthContextPage";


function App() {

  return (
    <div >
      <Navbar />
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/firstContextPage"  element={<FirstContextPage/>} />
      <Route path="/secondContextPage" element={<SecondContextPage/>} />
      <Route path="/thirdContextPage"  element={<ThirdContextPage/>} />
      <Route path="/fourthContextPage" element={<FourthContextPage/>} />
      <Route path="/fifthContextPage"  element={<Fifthcontextpage/>} />
      </Routes>
    </div>
  );
}

export default App;
