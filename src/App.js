import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/used_car' element={<Home/>} />
          <Route path='/product' element={<ProductDetail/>}/>
          <Route path='/profile_view' element={<ProfileView/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/user_profile' element={<OwnProfile/>} />
          <Route path='/post_ad' element={<PostAD/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
