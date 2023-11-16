
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Postoverview from './pages/postoverview';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">


      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Login />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/signup' element={<Signup />} ></Route>
          <Route exact path='/postoverview' element={<Postoverview />} ></Route>
          <Route exact path='/myprofile' element={<Profile />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
