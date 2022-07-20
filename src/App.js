import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Post from './pages/post/Post'
import CriarPost from './pages/criarPost/CriarPost'
import About from './pages/about/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import { useAuthentication } from './hooks/useAuthentication';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState();
  const { auth } = useAuthentication();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  },[auth])

  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider value={{ user }}>
          <Navbar/>
            <div className='container'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}/>
                <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/register"/>}/>
                <Route to="/posts/:id" element={<Post/>}/>
                <Route path="/posts/create" element={user? <CriarPost/> : <Navigate to="/register"/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </div>
          <Footer/>
          </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
