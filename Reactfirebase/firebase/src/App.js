import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/*  */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/user' element={<User />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
