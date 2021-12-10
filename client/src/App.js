import './App.css';
import LoginPage from './views/LoginPage/LoginPage'
import DashboardPage from './views/DashboardPage/DashboardPage'
import Home from './components/Home'
import RegisterPage from './views/RegisterPage/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App({user}) {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home user={user}/>} />
          <Route path='/login' element={<LoginPage user={user}/>} />
          <Route path='/register' element={<RegisterPage user={user}/>} />
          <Route path='/dashboard' element={<DashboardPage user={user}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
