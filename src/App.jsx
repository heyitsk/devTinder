import {Route, Routes, BrowserRouter} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Body from "./components/Body"
import Login from "./components/Login"
import SignUp from "./components/SignUp"


function App() {
  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>} >
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
