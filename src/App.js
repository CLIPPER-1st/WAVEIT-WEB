import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Startpage from './pages/Startpage';


const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Startpage />} />
    </Routes>
  )
}

export default App;