
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/signup' element={<Signup />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
