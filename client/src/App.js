import './App.css';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import  Login from './pages/Login';
import Protected from "./pages/Protected"
import StudentDashboard from './pages/StudentDashboard';
import ProfileUpdateForm from './pages/ProfileUpdateForm';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/studentdashboard' element={<StudentDashboard/>} />
          <Route exact path='/protected' element={<Protected/>} />
          <Route exact path='/update_profile' element={<ProfileUpdateForm />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
