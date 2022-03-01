import './App.css';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import  Login from './pages/Login';
import Protected from "./pages/Protected"
import StudentDashboard from './pages/StudentDashboard';
import ProfileUpdateForm from './pages/ProfileUpdateForm';
import AllCompanies from './components/StudentDashboard/AllCompanies';
import HRProfile from './components/HrDashboard/Profile';
import AppliedJobs from './components/StudentDashboard/AppliedJobs';
import HrDashboard from './pages/HrDashboard';
import Dashboard from './components/HrDashboard/Dashboard';
import Profile from './components/HrDashboard/Profile';
import AddJnfInf from './components/HrDashboard/AddJnfInf';
import AlljnfInf from './components/HrDashboard/AlljnfInf';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          
          <Route exact path='update_profile' element={<ProfileUpdateForm />} />
          <Route exact path='home' element={<Home />} />
          <Route exact path='login' element={<Login/>} />
          <Route  path='studentdashboard' element={<StudentDashboard/>} >
              <Route  path="allCompanies" element={<AllCompanies/>}/>
              <Route  path="appliedJobs" element={<AppliedJobs/>}/>
              <Route  path="profile" element={<Profile/>}/>
          </Route>
          <Route  path='hrdashboard' element={<HrDashboard/>} >
              <Route path='' element={<Dashboard/>}/>
              <Route path='profile' element={<HRProfile/>}/>
              <Route path='addJNF-INF' element={<AddJnfInf/>}/>
              <Route path='allJNF-INF' element={<AlljnfInf/>}/>
          </Route>
          <Route exact path='protected' element={<Protected/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
