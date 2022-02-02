
import TPOsignup from './components/tpo-signup';
import Login from './components/Login_student';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginTpo from './components/Login_tpo';

import Home from './components/Home';

function App() {
  return (
    <div className='app'>
      <Router>
      <Routes>
        <Route path='/signup' element={<TPOsignup />} />
        <Route path='/student/login' element={<Login />} />
        <Route path='/tpo/login' element={<LoginTpo />} />
        <Route path='/' element={<Home />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
