import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Reset from './components/Reset';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path='/category/:categoryName' element={<Category />}/>
          <Route path='/women' element={<Category />}/>
          <Route path='/men' element={<Category />}/>
          <Route path='/kids' element={<Category />}/>
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
    </div> 
  );
}

export default App;
