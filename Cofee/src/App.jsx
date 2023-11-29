import './App.css'
import "./assets/scss/main.scss"
import Layout from './layout';
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

