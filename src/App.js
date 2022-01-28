import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./AboutPage/About";
import Home from "./HomePage/Home";
import Navbar from "./components/Navbar";
import {AlertState} from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FirebaseState";
import Login from "./login/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          {isLogin
            ? <>
                <Navbar setIsLogin={setIsLogin}/>
                <Routes>
                  <Route path="/" exact element={<Home/>}/>
                  <Route path="/about" exact element={<About/>}/>
                </Routes>
              </>
            : <Login setIsLogin={setIsLogin}/>
          }
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
};

export default App;
