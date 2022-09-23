import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
          <Routes>
            {/* <Route path='/' element={<Index />} /> */}
            <Route path='/Login' element={<Login />} />
            {/* <Route path='/Register' element={<Register />} /> */}

          </Routes>
        </Router>
    </>
  );
}

export default App;
