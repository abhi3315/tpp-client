import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import TPOsignup from './components/Authentication/tpo-signup';
import Login from './components/Authentication/Login_student';
import StuDash from './components/StudentDashboard/StuDash';
import LoginTpo from './components/Authentication/Login_tpo';

function App() {
  return (
    <div className='app'>
      <Router>
      <Routes>
        <Route path='/signup' element={<TPOsignup />} />
        <Route path='/student/login' element={<Login />} />
        <Route path='/tpo/login' element={<LoginTpo />} />
        <Route path='/student/dashboard' element={<StuDash />} />
        <Route path='/' element={<HomePage />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
