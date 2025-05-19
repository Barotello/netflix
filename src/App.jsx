import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // auth durumu değiştiğinde çalışacak fonksiyon
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:");
        navigate("/"); // Giriş yapmış kullanıcıyı ana sayfaya yönlendir
      } else {
        console.log("User is Logged out");
        navigate("/login"); // Giriş yapmamış kullanıcıyı login sayfasına yönlendir
      }
    });

    // Cleanup fonksiyonu: Component unmount olduğunda `onAuthStateChanged` dinleyicisini temizler
    return () => unsubscribe();

  }, [navigate]); // navigate bağımlılığı, useEffect'in sadece bir kez çalışmasını sağlar

  return (
    <div>
       <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
