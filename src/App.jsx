import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import LoginPage from './components/pages/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/cart' Component={Cart} />
          <Route path='/login' Component={LoginPage} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
