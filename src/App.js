import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Startpage from './pages/Startpage';
import Login from "./pages/Login";
import FindIdpw from "./pages/FindIdpw";
import Sign from "./pages/Sign";
import MyPage from "./pages/MyPage";
import PostingPage from "./pages/PostingPage";
import Dummy from "./pages/dummyPage";//임시페이지
import SignNext from "./pages/SignNext";
import SignFinal from "./pages/SignFinal";
import Matching from "./pages/Matching";
import Detail from "./pages/Detail";
import MypageDetail from "./pages/MypageDetail";
import WishListDetail from './pages/WishListDetail';
import ApplicationDetail from './pages/ApplicationDetail';
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import WritePortfolio from "./pages/WritePortfolio";
import WishListPage from "./pages/WishListPage";
import ApplicationPage from "./pages/ApplicationPage";
import Profile from './pages/Profile';
const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Startpage />} />
      <Route path="/pages/profile" element={<Profile />} />
      <Route path="/pages/Login" element = {<Login/>}/>
      <Route path="/pages/FindIdpw" element = {<FindIdpw/>}/>
      <Route path="/pages/Sign" element = {<Sign/>}/>
      <Route path="/pages/dummy" element={<Dummy />}/>
      <Route path="/pages/mypage" element={<MyPage />}/>
      <Route path="/pages/postingpage" element={<PostingPage />}/>
      <Route path="/pages/SignNext" element={<SignNext/>}/>
      <Route path="/pages/SignFinal" element={<SignFinal/>}/>
      <Route path="/pages/Matching" element={<Matching />} />
      <Route path="pages/detail/:postId" element={<Detail />} />
      <Route path="pages/mypagedetail/:id" element={<MypageDetail />} />
      <Route path="pages/wishlistdetail/:id" element={<WishListDetail />} />
      <Route path="pages/applicationdetail/:id" element={<ApplicationDetail />} />
      <Route path="pages/portfoliodetail/:portfolioname" element={<PortfolioDetail />} />
      <Route path="/pages/Portfolio" element={<Portfolio />} />
      <Route path="/pages/WritePortfolio" element={<WritePortfolio />} />
      <Route path="/pages/WishListPage" element={<WishListPage/>}/>
      <Route path="/pages/ApplicationPage" element={<ApplicationPage/>}/>
    </Routes>
  )
}

export default App;