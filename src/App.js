import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import { useAuthentication } from './hooks/useAuthentication';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState();
  const { auth } = useAuthentication();
  console.log(user)
  
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
                <Route path="/register" element={<Register/>}/>
              </Routes>
            </div>
          <Footer/>
          </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
