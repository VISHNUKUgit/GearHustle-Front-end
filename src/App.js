import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import ProfileView from './Pages/ProfileView';
import Chat from './Pages/Chat';
import OwnProfile from './Pages/OwnProfile';
import PostAD from './Pages/PostAD';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landingpage from './Pages/Landingpage';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Error from './Components/Error';

function App() {
  const logStat = useSelector((state) => (state.loginstat.login))
  const [enter, setEnter] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setEnter(true)
    } else {
      setEnter(false)
    }
  }, [logStat])
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/used_car' element={enter ? <Home /> : <Landingpage />} />
        <Route path="/product" element={enter ? <ProductDetail /> : <Landingpage />} />
        <Route path='/profile_view' element={enter ? <ProfileView /> : <Landingpage />} />
        <Route path='/chat' element={enter ? <Chat /> : <Landingpage />} />
        <Route path='/user_profile' element={enter ? <OwnProfile /> : <Landingpage />} />
        <Route path='/post_ad' element={enter ? <PostAD /> : <Landingpage />} />
        {/* Catch-all route for paths that don't match any of the above */}
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
