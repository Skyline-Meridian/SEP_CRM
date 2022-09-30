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
import AdminHistory from './components/AdminHistory';
import UserHistory from './components/UserHistory';
import QuizOut from './components/testApp/QuizOut';
import QuizResult from './components/testApp/QuizResult';

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
            <Route path='/adminHistory' element={<AdminHistory />} />
            <Route path='/user' element={<User />} />
            <Route path='/userHistory' element={<UserHistory />} />
            <Route path='/out' element={<QuizOut />} />
            <Route path='/result' element={<QuizResult />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
