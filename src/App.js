import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Startpage from './pages/Startpage';
import Login from "./pages/Login";
import FindIdpw from "./pages/FindIdpw";
import Sign from "./pages/Sign";


const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Startpage />} />
      <Route path="/pages/Login" element = {<Login/>}/>
      <Route path="/pages/FindIdpw" element = {<FindIdpw/>}/>
      <Route path="/pages/Sign" element = {<Sign/>}/>
    </Routes>
  )
}

export default App;