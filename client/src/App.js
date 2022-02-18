import './App.css';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import  Login from './pages/Login';
import Protected from "./pages/Protected"
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/protected' element={<Protected/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
