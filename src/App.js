import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Startpage from './pages/Startpage';
import Login from "./pages/Login";
import FindIdpw from "./pages/FindIdpw";
import Sign from "./pages/Sign";
import MyPage from "./pages/MyPage";
import Dummy from "./pages/dummyPage";//임시페이지


const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Startpage />} />
      <Route path="/pages/Login" element = {<Login/>}/>
      <Route path="/pages/FindIdpw" element = {<FindIdpw/>}/>
      <Route path="/pages/Sign" element = {<Sign/>}/>
      <Route path="/pages/dummy" element={<Dummy />}/>
      <Route path="/pages/mypage" element={<MyPage />}/>
    </Routes>
  )
}

export default App;